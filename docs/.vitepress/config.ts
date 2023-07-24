import { defineConfig } from "vitepress";
import {
  chineseSearchOptimize,
  pagefindPlugin
} from "vitepress-plugin-pagefind";
import generateSideBar from "./scripts/generateSideBar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/yan/",
  lang: "zh-CN",
  title: "观澜无言",
  titleTemplate: ":title - 观澜无言",
  description: "wiki, notes",
  lastUpdated: true,
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",

    search: {
      provider: "local",
    },
    nav: [{ text: "🎨Home", link: "/" }],
    sidebar: [
      {
        text: "🛠️一字一词",
        items: [
          { text: "字集", link: "item/word-char-zh" },
          { text: "词库", link: "item/word-idiom-zh" },
          { text: "谚语俗语", link: "item/word-idiom-zh2" },
          { text: "网络流行词/MEME", link: "item/word-meme" },
        ],
      },
      {
        text: "🚀诗歌文赋",
        items: [
          { text: "古诗名句", link: "item/poem-zh-gushi" },
          { text: "新诗摘录", link: "item/poem-zh-xinshi" },
          { text: "对联集句", link: "item/poem-couplets" },
        ],
      },
      {
        text: "💬格言警句",
        items: [
          { text: "格言警句（中文）", link: "item/quote-aphorism-zh" },
          { text: "篇章摘录（中文）", link: "item/quote-aphorism-zh2" },
          { text: "未知的格言摘录（中文）", link: "item/quote-unknown-zh" },
          { text: "格言警句（外文）", link: "item/quote-aphorism-intl" },
          { text: "未知的格言摘录（外文）", link: "item/quote-unknown-intl" },
          { text: "网络流行语/MEME", link: "item/quote-meme" },
        ],
      },
      { text: "🧪社会新知", items: [] },
      {
        text: "📝归档",
        collapsed: true,
        items: [...generateSideBar()],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/haijiaolu/yan/" },
    ],
    // footer: {
    //   message: '',
    //   copyright: "",
    // },
  },
  markdown: {
    lineNumbers: true,
    theme: { light: "github-light", dark: "github-dark" },
    toc: { level: [1, 2, 3] },
  },

  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        btnPlaceholder: "搜索",
        placeholder: "搜索文档",
        emptyText: "空空如也",
        heading: "共: {{searchResult}} 条结果",
      }),
    ],
  },
});
