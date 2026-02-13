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

            // If clipboard has rich HTML (not just a plain-text wrapper),
            // let the default handler use it instead of converting
            const html = clipboardData.getData("text/html");
            if (html) {
              const doc = new DOMParser().parseFromString(html, "text/html");
              const body = doc.body;
              // Check if the HTML has real formatting (not just a <pre> or plain wrapper)
              const hasRichContent =
                body.querySelector("h1,h2,h3,h4,h5,h6,strong,em,ul,ol,table,a[href]");
              if (hasRichContent) return false;
            }

            // Convert markdown to HTML
            const converted = marked.parse(text, { async: false });

            event.preventDefault();
            editor.commands.insertContent(converted);

            return true;
          },
        },
      }),
    ];
  },
});
