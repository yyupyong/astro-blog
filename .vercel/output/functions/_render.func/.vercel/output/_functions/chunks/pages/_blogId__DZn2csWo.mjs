/* empty css                             */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, h as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_1qTiwkrG.mjs';
import 'kleur/colors';
import 'clsx';
import { createClient } from 'microcms-js-sdk';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 text-white font-sans"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/yupyong/dev/astro-my-blog/src/layouts/Layout.astro", void 0);

const client = createClient({
  serviceDomain: "5olq3zkxqx",
  apiKey: "JTV33PDgTDRlgAqsH4ItjzT5APStcw5sY2RJ"
});

const getAllBlogs = async (queries) => {
  return await client.get({
    endpoint: "blogs",
    queries
  }).then((res) => {
    console.log(res, "<<< response all data");
    return res;
  }).catch((err) => console.error(err));
};
const getBlogsDetail = async (contentId, queries) => {
  return await client.getListDetail({
    endpoint: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ENDPOINT,
    contentId,
    queries
  }).then((res) => {
    console.log(res, "<<< response detail data");
    return res;
  }).catch((err) => console.error(err));
};

class formatDate {
  #date;
  constructor(date) {
    if (date instanceof Date) this.#date = date;
    else if (typeof date === "string") this.#date = new Date(date);
    else this.#date = new Date(date);
  }
  /**
   * yyyy年mm月dd日に整形する
   * @returns yyyy年mm月dd日
   */
  toJpDateString = () => {
    return `${this.#date.getFullYear()}年${this.#date.getMonth() + 1}月${this.#date.getDate()}日`;
  };
  /**
   * yyyy年mm月dd日（曜日）に整形する
   * @returns yyyy年mm月dd日（曜日）
   */
  toJpDateWithWeek = () => {
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const dayOfWeek = week[this.#date.getDay()];
    if (this.#date === void 0 || dayOfWeek === void 0) return "ー";
    return `${this.toJpDateString()}（${dayOfWeek}）`;
  };
}

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await getAllBlogs({ fields: ["id"] });
  return res.contents.map((content) => {
    return {
      params: {
        blogId: content.id
      }
    };
  });
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogId } = Astro2.params;
  let blogData = null;
  if (blogId) {
    blogData = await getBlogsDetail(blogId);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${blogData ? blogData.title : ""}</h1> <p>
投稿日：${blogData ? new formatDate(blogData.revisedAt).toJpDateWithWeek() : ""} </p> <div>${unescapeHTML(blogData ? blogData.content : "")}</div> </main> ` })}`;
}, "/Users/yupyong/dev/astro-my-blog/src/pages/[blogId].astro", void 0);

const $$file = "/Users/yupyong/dev/astro-my-blog/src/pages/[blogId].astro";
const $$url = "/[blogId]";

const _blogId_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$blogId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _blogId_ as _, formatDate as f, getAllBlogs as g };
