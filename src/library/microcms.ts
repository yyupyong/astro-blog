import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { Blog, BlogResponse } from "../types/microcms";
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});
