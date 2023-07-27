import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "米客",
  description: "Minecraft Java版纯净公益生存服",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 配置选项
      // 索引全部内容
      indexContent: true,
    }),
    'vuepress-plugin-minecraft-status', {
      showButton: true // 开启插件
    }
  ],
});
