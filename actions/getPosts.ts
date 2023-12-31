'use server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '@/types';

interface IGetPosts {
   page: number;
   pageSize: number;
   searchKeyword?: string;
   tag?: string;
}

const getPosts = async ({
   page,
   pageSize,
   searchKeyword,
   tag,
}: IGetPosts): Promise<{ posts: IPost[]; totalCount: number }> => {
   const files = fs.readdirSync(path.join('posts'));

   const posts = files.map((fileName) => {
      const markdownMeta = fs.readFileSync(path.join('posts', fileName));

      const { data } = matter(markdownMeta);

      const slug = fileName.replace('.mdx', '');

      return { ...data, slug } as IPost;
   });

   // Fungsi pembanding untuk mengurutkan berdasarkan tanggal
   const compareDates = (a: IPost, b: IPost) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB.getTime() - dateA.getTime();
   };

   // Mengurutkan array berdasarkan tanggal secara ascending
   let sortedPostByDate = posts.sort(compareDates);

   //filter post by title

   if (searchKeyword) {
      const postByTitle = sortedPostByDate.filter((post: IPost) => {
         return post.title.toLowerCase().includes(searchKeyword.toLowerCase());
      });
      sortedPostByDate = postByTitle;
   }

   //filter post by category

   if (tag) {
      const postByTag = sortedPostByDate.filter((post: IPost) => {
         return post.tags.includes(tag);
      });
      sortedPostByDate = postByTag;
   }

   const totalCount = sortedPostByDate.length;
   const startIndex = (page - 1) * pageSize;
   const endIndex = startIndex + pageSize;

   const postsLimited = sortedPostByDate.slice(startIndex, endIndex); // Mengambil Limited

   return { posts: postsLimited, totalCount };
};

export default getPosts;
