import { defineConfig } from "vitepress";
import generateSideBar2 from "./scripts/generateSideBar";
import footnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/yan/",
  lang: "zh-CN",
  title: "观澜无言",
  titleTemplate: ":title - 观澜无言",
  description: "wiki, notes",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/yan/favicon.ico" }],
  ],
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
          { text: "字集", link: "/item/word-zh-char" },
          { text: "词库", link: "/item/word-zh-idiom" },
          { text: "谚语俗语", link: "/item/word-zh-idiom2" },
          { text: "网络流行词/MEME", link: "/item/word-meme" },
        ],
      },
      {
        text: "🚀诗歌文赋",
        items: [
          { text: "古诗名句", link: "/item/poem-zh-gushi" },
          { text: "新诗摘录", link: "/item/poem-zh-xinshi" },
          { text: "对联集句", link: "/item/poem-zh-couplets" },
          { text: "外国诗歌", link: "/item/poem-intl" },
        ],
      },
      {
        text: "💬格言警句",
        items: [
          { text: "格言警句（中文）", link: "/item/quote-zh" },
          { text: "篇章摘录（中文）", link: "/item/quote-zh-long" },
          { text: "未知的格言摘录（中文）", link: "/item/quote-zh-unk" },
          { text: "格言警句（外文）", link: "/item/quote-intl" },
          { text: "未知的格言摘录（外文）", link: "/item/quote-intl-unk" },
          { text: "网络流行语/MEME", link: "/item/quote-meme" },
        ],
      },
      {
        text: "🧪社会新知",
        items: [
          { text: "新知-历史地理", link: "item/info-ld.md" },
          { text: "新知-社会综合", link: "item/info-sh.md" },
          { text: "新知-自然科技", link: "item/info-zr.md" },
          { text: "新知-机构学校", link: "item/info-jg.md" },
          { text: "新知-文化生活", link: "item/info-wh.md" },

          { text: "新知-管理定律", link: "item/info-gl.md" },
          { text: "新知-国朝新学", link: "item/info-zh.md" },
        ],
      },
      {
        text: "📝札记-作者",
        collapsed: true,
        items: [...generateSideBar2("wiki", 0)],
      },
      {
        text: "📝札记-书籍",
        collapsed: true,
        items: [...generateSideBar2("book", 0)],
      },
      {
        text: "📝札记-文章",
        collapsed: true,
        items: [...generateSideBar2("post", 1)],
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
    toc: { level: [1, 2, 3, 4, 5] },
    config: (md) => {
      // md.use(mathjax3);
      md.use(footnote);
    },
  },

  vite: {
    plugins: [
      // pagefindPlugin({
      //   customSearchQuery: chineseSearchOptimize,
      //   btnPlaceholder: "搜索",
      //   placeholder: "搜索文档",
      //   emptyText: "空空如也",
      //   heading: "共: {{searchResult}} 条结果",
      // }),
    ],
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
});
