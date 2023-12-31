import getPosts from '@/actions/getPosts';
import InfinityScrollPost from '@/components/infinity-scroll-post';
import { notFound } from 'next/navigation';

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
