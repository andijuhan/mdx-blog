import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '@/types';
import PostCard from '@/components/post-card';

const getPosts = async (): Promise<IPost[]> => {
   const files = fs.readdirSync(path.join('posts'));

   const posts = files.map((fileName) => {
      const markdownMeta = fs.readFileSync(path.join('posts', fileName));

      const { data } = matter(markdownMeta);

      const slug = fileName.replace('.mdx', '');

      return { ...data, slug } as IPost;
   });

   return posts;
};

export default async function Home() {
   const posts = await getPosts();
   // Fungsi pembanding untuk mengurutkan berdasarkan tanggal
   const compareDates = (a: IPost, b: IPost) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB.getTime() - dateA.getTime();
   };

   // Mengurutkan array berdasarkan tanggal secara ascending
   const sortedPostByDate = posts.sort(compareDates);

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
         {sortedPostByDate.map((post, index) => (
            <PostCard post={post} key={index} />
         ))}
      </div>
   );
}
