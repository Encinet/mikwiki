import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/reveal/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
