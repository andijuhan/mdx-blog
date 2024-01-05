'use client';
import { IPost } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface IPostCard {
   post: IPost;
}

const PostCard = ({ post }: IPostCard) => {
   const [isImageReady, setIsImageReady] = useState(false);

   return (
      <Link href={`/${post.slug}`} passHref>
         <div className='flex flex-col group rounded-md border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-700'>
            <div className='h-[300px] md:h-[250px] lg:h-[200px] w-full overflow-hidden'>
               <Image
                  src={post.thumbnailUrl}
                  width={300}
                  height={300}
                  quality={75}
                  alt={post.title}
                  className={`w-full h-full object-cover object-center group-hover:brightness-90 transition-all duration-[2s] border-b dark:border-gray-700 ${
                     isImageReady ? 'blur-0' : 'blur-3xl'
                  }`}
                  onLoad={() => setIsImageReady(true)}
               />
            </div>
            <div className='flex flex-col gap-2 p-3 max-w-[700px]'>
               <h2 className='text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1 lg:line-clamp-2'>
                  {post.title}
               </h2>
               <span className='text-gray-700 dark:text-gray-300'>
                  {post.date}
               </span>
            </div>
         </div>
      </Link>
   );
};

export default PostCard;
