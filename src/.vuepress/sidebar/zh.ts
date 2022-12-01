import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "指南",
      prefix: "guide/",
      link: "guide/join",
      children: [
          "join",
          {
            icon: "fa-solid fa-earth-americas",
            text: "世界",
            prefix: "worlds/",
            children: "structure",
          },
        ],
    },
    "rule",
  ],
});
