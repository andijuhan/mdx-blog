import { Image as CoverImage } from 'lucide-react';

const SkeletonPostCard = () => {
   return (
      <div className='flex flex-col group rounded-md border dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-700'>
         <div className='h-[300px] md:h-[250px] lg:h-[200px] flex items-center justify-center bg-gray-300 dark:bg-gray-600 dark:text-gray-500 text-gray-300 animate-pulse w-full'>
            <CoverImage size={50} />
         </div>
         <div className='flex flex-col gap-3 p-3 max-w-[700px]'>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'></div>
            <div className='w-[90%] h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'></div>
            <div className='w-1/2 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse'></div>
         </div>
      </div>
   );
};

export default SkeletonPostCard;
