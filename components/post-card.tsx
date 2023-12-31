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
         <div className='flex flex-col group rounded-md border overflow-hidden bg-white'>
            <div className='h-[250px] w-full overflow-hidden'>
               <Image
                  src={post.thumbnailUrl}
                  width={300}
                  height={300}
                  alt={post.title}
                  className={`w-full h-full object-cover object-center group-hover:brightness-90 transition-all duration-[1s] border-b ${
                     isImageReady ? 'blur-0' : 'blur-3xl'
                  }`}
                  onLoad={() => setIsImageReady(true)}
               />
            </div>
            <div className='flex flex-col gap-2 p-3 max-w-[700px]'>
               <h2 className='text-xl font-semibold tracking-tight group-hover:text-indigo-500 transition-colors duration-300 line-clamp-1'>
                  {post.title}
               </h2>
               <span className='text-gray-700'>{post.date}</span>
            </div>
         </div>
      </Link>
   );
};

export default PostCard;
