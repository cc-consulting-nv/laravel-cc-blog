import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { marked } from "marked";

const MARKDOWN_PATTERNS = [
  /^#{1,6}\s/, // headings
  /\*\*.+\*\*/, // bold
  /\*.+\*/, // italic
  /^\s*[-*+]\s/, // unordered list
  /^\s*\d+\.\s/, // ordered list
  /\[.+\]\(.+\)/, // links
  /^>\s/, // blockquote
  /^```/, // code block
  /`[^`]+`/, // inline code
  /^---+$/, // horizontal rule
];

function looksLikeMarkdown(text) {
  const lines = text.split("\n");
  let matches = 0;

  for (const line of lines) {
    for (const pattern of MARKDOWN_PATTERNS) {
      if (pattern.test(line)) {
        matches++;
        break;
      }
    }
  }

  // If at least 2 lines match markdown patterns, or 1 match on short text
  return matches >= 2 || (matches >= 1 && lines.length <= 3);
}

// Repair nested 3-backtick fences. CommonMark closes a fenced code block
// at the first matching backtick run, so a ```lang block that contains a
// ```lang example inside it terminates early and the rest of the post
// becomes mis-tokenized.
//
// Detection: an open ```lang fence whose intended close is preceded by
// another bare ``` (the parser-visible "false close" of the inner example).
// Matching pattern: ```lang ... ```inner-lang ... ``` ``` — the second
// trailing bare fence is the real outer close. Promote the matched outer
// pair to 4 backticks so all 3-backtick lines inside become literal content.
function normalizeNestedFences(text) {
  const lines = text.replace(/\r\n?/g, "\n").split("\n");
  const fenceOpenRe = /^(\s*)`{3}\s*\S+\s*$/;
  const fenceBareRe = /^(\s*)`{3}\s*$/;

  const promotions = new Set();
  let i = 0;
  while (i < lines.length) {
    if (!fenceOpenRe.test(lines[i])) {
      i++;
      continue;
    }
    const openIdx = i;
    let j = openIdx + 1;
    let foundDoubleClose = -1;
    let sawAnotherOpen = false;
    while (j < lines.length) {
      if (fenceOpenRe.test(lines[j])) {
        sawAnotherOpen = true;
        j++;
        continue;
      }
      if (fenceBareRe.test(lines[j])) {
        let k = j + 1;
        while (k < lines.length && lines[k].trim() === "") k++;
        if (k < lines.length && fenceBareRe.test(lines[k])) {
          foundDoubleClose = k;
          break;
        }
        break;
      }
      j++;
    }
    if (foundDoubleClose !== -1 && sawAnotherOpen) {
      promotions.add(openIdx);
      promotions.add(foundDoubleClose);
      i = foundDoubleClose + 1;
      continue;
    }
    i = openIdx + 1;
  }

  if (promotions.size === 0) return text;
  for (const lineIdx of promotions) {
    lines[lineIdx] = lines[lineIdx].replace(/`{3}/, "````");
  }
  return lines.join("\n");
}

const METADATA_LABELS = {
  title: "title",
  slug: "slug",
  category: "category",
  status: "status",
  "seo title": "meta_title",
  "meta title": "meta_title",
  "meta description": "meta_description",
  "canonical url": "canonical_url",
  "social title": "social_title",
  "social description": "social_description",
  "social preview": "social_description",
  "social image url": "social_image_url",
  excerpt: "excerpt",
  "answer summary": "answer_summary",
  featured: "isFeatured",
  "feature order": "feature_order",
  "faq items": "faq_items",
  "faq items json": "faq_items",
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeStatus(value) {
  const normalized = value.trim().toLowerCase();
  const valid = ["draft", "published", "scheduled", "archived"];

  return valid.includes(normalized) ? normalized : null;
}

function parseBoolean(value) {
  const normalized = value.trim().toLowerCase();

  if (["true", "yes", "1", "featured", "on"].includes(normalized)) {
    return true;
  }

  if (["false", "no", "0", "off"].includes(normalized)) {
    return false;
  }

  return null;
}

function parseFaqItems(value) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function truncateAtWord(value, maxLength) {
  if (!value || value.length <= maxLength) {
    return value;
  }

  const truncated = value.slice(0, maxLength - 3);
  const boundary = truncated.lastIndexOf(" ");

  if (boundary > Math.max(20, maxLength - 30)) {
    return `${truncated.slice(0, boundary).trim()}...`;
  }

  return `${truncated.trim()}...`;
}

function parseMarkdownDocument(text) {
  const lines = text.replace(/\r\n?/g, "\n").trim().split("\n");
  const metadata = {};
  let hasDocumentMetadata = false;

  if (lines[0]?.match(/^#\s+.+$/)) {
    metadata.title = lines.shift().replace(/^#\s+/, "").trim();
    hasDocumentMetadata = true;
  }

  while (lines[0] !== undefined && lines[0].trim() === "") {
    lines.shift();
  }

  while (lines[0] !== undefined) {
    const match = lines[0].match(/^\*\*(.+?):\*\*\s*(.+)\s*$/);

    if (!match) {
      break;
    }

    const key = METADATA_LABELS[match[1].trim().toLowerCase()];
    const value = match[2].trim();
    hasDocumentMetadata = true;
    lines.shift();

    if (!key || value === "") {
      continue;
    }

    if (key === "status") {
      const normalized = normalizeStatus(value);
      if (normalized) {
        metadata.status = normalized;
      }
      continue;
    }

    if (key === "isFeatured") {
      const parsed = parseBoolean(value);
      if (parsed !== null) {
        metadata.isFeatured = parsed;
      }
      continue;
    }

    if (key === "feature_order") {
      const parsed = Number.parseInt(value, 10);
      if (Number.isFinite(parsed)) {
        metadata.feature_order = parsed;
      }
      continue;
    }

    if (key === "faq_items") {
      const parsed = parseFaqItems(value);
      if (parsed) {
        metadata.faq_items = parsed;
      }
      continue;
    }

    metadata[key] = value;
  }

  while (lines[0] !== undefined && lines[0].trim() === "") {
    lines.shift();
  }

  if (lines[0]?.match(/^---+\s*$/)) {
    hasDocumentMetadata = true;
    lines.shift();
  }

  while (lines[0] !== undefined && lines[0].trim() === "") {
    lines.shift();
  }

  const bodyMarkdown = lines.join("\n").trim();
  const firstBlock = bodyMarkdown.split(/\n\s*\n/, 1)[0]?.trim() ?? "";

  if (
    !metadata.excerpt &&
    ((firstBlock.startsWith("*") && firstBlock.endsWith("*")) ||
      (firstBlock.startsWith("_") && firstBlock.endsWith("_")))
  ) {
    metadata.excerpt = firstBlock.slice(1, -1).trim();
  }

  if (!metadata.slug && metadata.title) {
    metadata.slug = slugify(metadata.title);
  }

  if (!metadata.social_title) {
    metadata.social_title = metadata.meta_title ?? metadata.title ?? "";
  }

  if (!metadata.social_description && metadata.meta_description) {
    metadata.social_description = metadata.meta_description;
  }

  if (!metadata.answer_summary) {
    metadata.answer_summary = metadata.excerpt ?? metadata.meta_description ?? "";
  }

  metadata.meta_title = truncateAtWord(metadata.meta_title, 70);
  metadata.meta_description = truncateAtWord(metadata.meta_description, 160);
  metadata.social_title = truncateAtWord(metadata.social_title, 200);
  metadata.social_description = truncateAtWord(metadata.social_description, 320);
  metadata.excerpt = truncateAtWord(metadata.excerpt, 500);
  metadata.answer_summary = truncateAtWord(metadata.answer_summary, 1500);

  return {
    bodyMarkdown,
    hasDocumentMetadata,
    metadata,
  };
}

function getLivewireComponent(editor) {
  const host =
    editor?.options?.element?.closest?.("[wire\\:id]") ??
    editor?.view?.dom?.closest?.("[wire\\:id]") ??
    null;

  if (!host || !window.Livewire) {
    return null;
  }

  return window.Livewire.find(host.getAttribute("wire:id"));
}

async function resolveCategoryId(component, value) {
  if (!component || !value) {
    return null;
  }

  const candidates = value
    .split(/[\/,|]/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (!candidates.length) {
    return null;
  }

  try {
    const options = await component.$call(
      "callSchemaComponentMethod",
      "form.category_id",
      "getOptionsForJs",
    );

    if (!Array.isArray(options)) {
      return null;
    }

    const normalizedCandidates = candidates.map((candidate) => ({
      raw: candidate,
      slug: slugify(candidate),
      lower: candidate.toLowerCase(),
    }));

    for (const candidate of normalizedCandidates) {
      const exact = options.find((option) => {
        const label = String(option?.label ?? "").trim();
        const lower = label.toLowerCase();
        return lower === candidate.lower || slugify(label) === candidate.slug;
      });

      if (exact?.value) {
        return String(exact.value);
      }
    }

    for (const candidate of normalizedCandidates) {
      const partial = options.find((option) => {
        const label = String(option?.label ?? "").trim();
        const lower = label.toLowerCase();
        return lower.includes(candidate.lower) || slugify(label).includes(candidate.slug);
      });

      if (partial?.value) {
        return String(partial.value);
      }
    }
  } catch (error) {
    console.warn("Unable to resolve blog category from markdown paste.", error);
  }

  return null;
}

function setDomFieldValue(field, value) {
  if (value === undefined || value === null || value === "") {
    return;
  }

  const element = document.getElementById(`form.${field}`);

  if (!element) {
    return;
  }

  element.value = value;
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
  element.dispatchEvent(new Event("blur", { bubbles: true }));
}

async function applyMetadataToForm(editor, metadata) {
  const component = getLivewireComponent(editor);

  setDomFieldValue("title", metadata.title);
  setDomFieldValue("slug", metadata.slug);
  setDomFieldValue("meta_title", metadata.meta_title);
  setDomFieldValue("meta_description", metadata.meta_description);
  setDomFieldValue("canonical_url", metadata.canonical_url);
  setDomFieldValue("social_title", metadata.social_title);
  setDomFieldValue("social_description", metadata.social_description);
  setDomFieldValue("social_image_url", metadata.social_image_url);
  setDomFieldValue("excerpt", metadata.excerpt);
  setDomFieldValue("answer_summary", metadata.answer_summary);
  setDomFieldValue("feature_order", metadata.feature_order);

  if (!component) {
    return;
  }

  if (metadata.status) {
    await component.$set("data.status", metadata.status);
  }

  if (metadata.isFeatured !== undefined && metadata.isFeatured !== null) {
    await component.$set("data.isFeatured", metadata.isFeatured);
  }

  if (Array.isArray(metadata.faq_items) && metadata.faq_items.length) {
    await component.$set("data.faq_items", metadata.faq_items);
  }

  const categoryId = await resolveCategoryId(component, metadata.category);

  if (categoryId) {
    await component.$set("data.category_id", categoryId);
  }
}

export default Extension.create({
  name: "markdownPaste",

  addProseMirrorPlugins() {
    const editor = this.editor;

    return [
      new Plugin({
        key: new PluginKey("markdownPaste"),
        props: {
          handlePaste(view, event) {
            const clipboardData = event.clipboardData;
            if (!clipboardData) return false;

            const text = clipboardData.getData("text/plain");
            if (!text || !text.trim()) return false;

            if (!looksLikeMarkdown(text)) return false;

            // Markdown with fenced code blocks: always prefer markdown
            // conversion. Rich HTML from rendered pages or chat tools wraps
            // code in <div><span> syntax-highlight markup that does not
            // match TipTap's CodeBlock parseHTML rule (pre > code), so
            // fenced code arrives as plain paragraphs.
            const hasFencedCode = /^```/m.test(text);

            if (!hasFencedCode) {
              // If clipboard has rich HTML (not just a plain-text wrapper),
              // let the default handler use it instead of converting
              const html = clipboardData.getData("text/html");
              if (html) {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const body = doc.body;
                const hasRichContent =
                  body.querySelector("h1,h2,h3,h4,h5,h6,strong,em,ul,ol,table,a[href]");
                if (hasRichContent) return false;
              }
            }

            event.preventDefault();
            const { bodyMarkdown, hasDocumentMetadata, metadata } =
              parseMarkdownDocument(text);
            const markdownToInsert = normalizeNestedFences(
              hasDocumentMetadata ? bodyMarkdown : text,
            );
            // marked emits whitespace between block tags (e.g. `</p>\n<pre>`).
            // TipTap parses those as text nodes between blocks, producing
            // empty paragraphs around code blocks. Strip whitespace that
            // sits strictly between adjacent tag boundaries. Content inside
            // <pre><code> is unaffected because text-to-tag boundaries
            // don't match this pattern.
            const converted = marked
              .parse(markdownToInsert, { async: false })
              .replace(/>\s+</g, "><");

            void applyMetadataToForm(editor, metadata);

            if (hasDocumentMetadata) {
              editor.commands.clearContent();
            }

            if (markdownToInsert.trim() !== "") {
              editor.commands.insertContent(converted);
            }

            return true;
          },
        },
      }),
    ];
  },
});
