import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  { text: "规则", icon: "discover", link: "/rule/" },
  {
    text: "QQ群",
    icon: "fa-brands fa-qq",
    link: "https://jq.qq.com/?_wv=1027&k=HSSe2Rxe",
  },
]);
