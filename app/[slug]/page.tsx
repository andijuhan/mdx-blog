import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import { IPost } from '@/types';
import PostContent from '@/components/post-content';
import Image from 'next/image';
import Link from 'next/link';

const getContent = async (
   slug: string
): Promise<{ data: IPost; mdxSource: any }> => {
   try {
      const markdownWithMeta = fs.readFileSync(
         path.join('posts', slug + '.mdx')
      );

      const { data, content } = matter(markdownWithMeta);

      const mdxSource = await serialize(content);

      const postData: IPost = {
         title: data.title || '',
         slug: data.slug || '',
         date: data.date || '',
         description: data.description || '',
         thumbnailUrl: data.thumbnailUrl || '',
         tags: data.tags || [],
      };

      return { data: postData, mdxSource };
   } catch (error) {
      return notFound();
   }
};

const page = async ({ params }: { params: { slug: string } }) => {
   const { data, mdxSource } = await getContent(params.slug);

   return (
      <div>
         <Image
            src={data.thumbnailUrl}
            alt={data.title}
            width={800}
            height={500}
            className='w-full h-[200px] sm:h-[400px] object-cover object-center rounded mb-3 border'
         />
         <h1 className='text-3xl font-bold mb-3'>{data.title}</h1>
         <div className='mb-4 flex gap-4 border-b pb-2'>
            <div>
               <span>{data.date}</span>
            </div>
            <div>
               {data.tags.map((tag, index) => (
                  <Link href={`/tag/${tag}`} key={index} passHref>
                     <span className='text-indigo-500 hover:text-indigo-700 mr-2'>
                        #{tag}
                     </span>
                  </Link>
               ))}
            </div>
         </div>
         <PostContent mdxSource={mdxSource} />
      </div>
   );
};

export default page;
