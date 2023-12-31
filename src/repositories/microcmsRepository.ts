import type { MicroCMSQueries } from "microcms-js-sdk";
import type { BlogsData, BlogsDetail } from "../types/microcmsTypes";
import { client } from "../library/microcms";

// Get list API data
export const getAllBlogs = async (
  queries: MicroCMSQueries
): Promise<BlogsData> => {
  return await client
    .get({
      endpoint: "blogs",
      queries,
    })
    .then((res) => {
      console.log(res, "<<< response all data");
      return res;
    })
    .catch((err) => console.error(err));
};

// Get list API detail data
export const getBlogsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<BlogsDetail> => {
  return await client
    .getListDetail({
      endpoint: import.meta.env.ENDPOINT,
      contentId,
      queries,
    })
    .then((res) => {
      console.log(res, "<<< response detail data");
      return res;
    })
    .catch((err) => console.error(err));
};
