/* empty css                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as createAstro, h as renderComponent } from '../astro_1qTiwkrG.mjs';
import 'kleur/colors';
import { f as formatDate, g as getAllBlogs, $ as $$Layout } from './_blogId__DZn2csWo.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, url, createdAt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 group"> <!-- groupクラスを追加 --> <a class="block w-full h-full"${addAttribute(href, "href")}> <img class="w-full h-48 object-cover rounded-t-lg"${addAttribute(url, "src")} alt="Blog image"> <!-- 画像のURLを修正 --> <div class="p-4 bg-black text-white flex flex-col justify-between h-48 rounded-b-lg"> <div class="flex-grow"> <!-- タイトルとタグのコンテナ --> <h2 class="text-lg font-semibold group-hover:text-blue-500">${title}</h2> <!-- タイトルのフォントウェイトを設定し、ホバー時の色変更を追加 --> <div class="mt-2"> <!-- ここでタグを表示 --> <span class="text-blue-500 mr-2">#タグ1</span> <span class="text-blue-500 mr-2">#タグ2</span> <span class="text-blue-500">#タグ3</span> </div> </div> <div class="mt-4 self-end text-gray-500"> <!-- 日付を下寄せに設定 --> ${new formatDate(createdAt).toJpDateWithWeek()} </div> </div> </a> </article>`;
}, "/Users/yupyong/dev/astro-my-blog/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const res = await getAllBlogs({
    fields: [
      "id",
      "title",
      "createdAt",
      "updatedAt",
      "publishedAt",
      "revisedAt",
      "content",
      "eyecatch.url",
      "eyecatch.height",
      "eyecatch.width",
      "category.id",
      "category.createdAt",
      "category.updatedAt",
      "category.publishedAt",
      "category.revisedAt",
      "category.name"
    ]
  });
  console.log(res, "<<< response all data");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "yupyong' blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="w-full bg-gray-900 px-8 pt-6"> <div class="flex justify-between items-center"> <h1 class="text-white text-xl font-bold flex items-center"> <span class="text-sm ml-2 text-gray-400">personal blog</span> </h1> <nav> <ul class="flex space-x-6 text-white"> <li><a href="#" class="hover:text-gray-300">About Me</a></li> <li><a href="#" class="hover:text-gray-300">Interests</a></li> <li><a href="#" class="hover:text-gray-300">Reflections</a></li> <li><a href="#" class="hover:text-gray-300">Contact</a></li> </ul> </nav> </div> <div class="mt-8 text-center"> <h1 class="text-blue-500 text-5xl font-bold">Yupyong Kim</h1> <p class="text-gray-400 mt-4">Thoughts, Interests, and Daily Reflections</p> </div> </header> <main class="mt-12 px-8"> <div class="container mx-auto px-4 lg:px-28 xl:px-28"> <h2 class="text-white text-3xl font-semibold mb-8 text-left">Latest Articles</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${res.contents.map((content) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": content.id, "title": content.title, "url": content.eyecatch?.url, "createdAt": content.createdAt })}`)} </div> </div> </main> ` })}`;
}, "/Users/yupyong/dev/astro-my-blog/src/pages/index.astro", void 0);

const $$file = "/Users/yupyong/dev/astro-my-blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
