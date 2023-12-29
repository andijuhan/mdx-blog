import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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
      <div>
         {posts.map((post, index) => (
            <Link key={index} href={`/post/${post.slug}`} passHref>
               {post.title}
            </Link>
         ))}
      </div>
   );
}
