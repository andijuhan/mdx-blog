// app/server-sitemap.xml/route.ts
import getPosts from "@/actions/getPosts";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const { posts } = await getPosts({ page: 1, pageSize: 1000 });

  const slugs = posts.map((post) => {
    return {
      loc: process.env.BASE_URL + "/" + post.slug,
      lastmod: new Date(post.date).toISOString(),
    };
  });

  return getServerSideSitemap(slugs);
}
