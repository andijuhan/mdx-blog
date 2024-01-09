import getPosts from "@/actions/getPosts";
import InfinityScrollPost from "@/components/infinity-scroll-post";
import { blogSetting } from "@/data";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { tagName: string };
}) {
  return {
    title: `Posts about ${params.tagName}` + " | " + blogSetting.title,
    description: "",
  };
}

export default async function page({
  params,
}: {
  params: { tagName: string };
}) {
  const { posts } = await getPosts({
    page: 1,
    pageSize: 6,
    tag: params.tagName,
  });

  if (posts.length === 0) {
    return notFound();
  }

  return <InfinityScrollPost initialPost={posts} tag={params.tagName} />;
}
