'use server';
import { IPost } from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

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
      //await new Promise((resolve) => setTimeout(resolve, 5000));
      return { data: postData, mdxSource };
   } catch (error) {
      return notFound();
   }
};

export default getContent;
