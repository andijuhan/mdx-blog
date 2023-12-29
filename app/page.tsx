import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

interface IPost {
   title: string;
   slug: string;
   date: string;
   description: string;
   thumbnailUrl: string;
   tags: string[];
}

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

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
         {posts.map((post, index) => (
            <Link key={index} href={`/post/${post.slug}`} passHref>
               <div className='flex flex-col shadow group'>
                  <div className='h-[300px]'>
                     <Image
                        src={post.thumbnailUrl}
                        width={500}
                        height={500}
                        alt={post.title}
                        className='w-full h-full object-cover object-center brightness-95 group-hover:brightness-100 transition-all duration-300'
                     />
                  </div>
                  <div className='flex flex-col gap-2 p-3 max-w-[700px]'>
                     <h2 className='text-xl font-semibold tracking-tight'>
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
