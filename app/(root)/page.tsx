import getPosts from '@/actions/getPosts';
import InfinityScrollPost from '@/components/infinity-scroll-post';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
   const { posts } = await getPosts({ page: 1, pageSize: 6 });

   return (
      <Suspense fallback={<Loading />}>
         <InfinityScrollPost initialPost={posts} />
      </Suspense>
   );
}
