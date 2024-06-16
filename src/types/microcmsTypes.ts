export type BlogsDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type BlogsData = {
  contents: BlogContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogContent = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  content: string;
  eyecatch?: BlogUrl; // eyecatchは任意のフィールドとする
  category?: BlogCategory; // categoryは任意のフィールドとする
};

export type BlogUrl = {
  url: string;
  height: number;
  width: number;
};

export type BlogCategory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};
