import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '@/types';

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
            <Link key={index} href={`/${post.slug}`} passHref>
               <div className='flex flex-col group rounded-md border overflow-hidden bg-white'>
                  <div className='h-[300px]'>
                     <Image
                        src={post.thumbnailUrl}
                        width={500}
                        height={500}
                        alt={post.title}
                        className='w-full h-full object-cover object-center group-hover:brightness-90 transition-all duration-300'
                     />
                  </div>
                  <div className='flex flex-col gap-2 p-3 max-w-[700px]'>
                     <h2 className='text-xl font-semibold tracking-tight group-hover:text-indigo-500 transition-colors duration-300'>
                        {post.title}
                     </h2>
                     <span className='text-gray-700'>{post.date}</span>
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
}
