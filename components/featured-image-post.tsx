'use client';

import { IPost } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface FeaturedImagePostProps {
   data: IPost;
}

const FeaturedImagePost = ({ data }: FeaturedImagePostProps) => {
   const [isImageReady, setIsImageReady] = useState(false);

   return (
      <div className='w-full h-[200px] sm:h-[400px] overflow-hidden rounded mb-3 border dark:border-gray-700'>
         <Image
            src={data.thumbnailUrl}
            alt={data.title}
            width={800}
            height={500}
            className={`w-full h-[200px] sm:h-[400px] object-cover object-center transition-all duration-[1s] ${
               isImageReady ? 'blur-0' : 'blur-xl'
            }`}
            onLoad={() => setIsImageReady(true)}
         />
      </div>
   );
};

export default FeaturedImagePost;
