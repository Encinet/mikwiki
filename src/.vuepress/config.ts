import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "米客",
      description: "Minecraft Java版纯净公益生存服",
    },
    "/en/": {
      lang: "en-US",
      title: "Mik",
      description: "Minecraft Java version of pure public welfare survival server",
    },
  },

  theme,

  shouldPrefetch: false,
});
