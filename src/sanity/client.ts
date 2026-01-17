import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "59cwrbar",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, 
});