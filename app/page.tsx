import getPosts from '@/actions/getPosts';
import InfinityScrollPost from '@/components/infinity-scroll-post';

export default async function Home() {
   const { posts, totalCount } = await getPosts({ page: 1, pageSize: 6 });

   return <InfinityScrollPost initialPost={posts} />;
}
