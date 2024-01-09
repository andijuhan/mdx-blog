import getPosts from "@/actions/getPosts";
import InfinityScrollPost from "@/components/infinity-scroll-post";
import { blogSetting } from "@/data";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { searchKeyword: string };
}) {
  return {
    title: `You search ${params.searchKeyword}` + " | " + blogSetting.title,
    description: "",
  };
}

export default async function page({
  params,
}: {
  params: { searchKeyword: string };
}) {
  const { posts } = await getPosts({
    page: 1,
    pageSize: 6,
    searchKeyword: params.searchKeyword,
  });

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <InfinityScrollPost
      initialPost={posts}
      searchKeyword={params.searchKeyword}
    />
  );
}
