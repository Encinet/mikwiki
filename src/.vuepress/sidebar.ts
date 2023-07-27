import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
    {
      icon: "fa-solid fa-book",
      text: "指南",
      prefix: "guide/",
      link: "guide/join",
      children: [
          "join",
          "command",
          "robot",
          "crafting",
          "enderdragon",
          {
            icon: "fa-solid fa-lightbulb",
            text: "特色",
            prefix: "feature/",
            children: "structure",
          },
          "worlds",
        ],
    },
    "rule/",
  ],
});
