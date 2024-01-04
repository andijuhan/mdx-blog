import { Image as CoverImage } from 'lucide-react';

const SkeletonPostContent = () => {
   return (
      <div className='w-full'>
         <div className='w-full flex items-center justify-center h-[200px] sm:h-[400px] bg-gray-300 dark:bg-gray-700 dark:text-gray-500 text-gray-400 rounded mb-3 border dark:border-gray-700 animate-pulse'>
            <CoverImage size={50} />
         </div>
         <div className='w-[90%] mb-4 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
         <div className='mb-4 w-full flex overflow-x-scroll scrollbar-thin gap-4 border-b dark:border-b-gray-700 pb-2'>
            <div className='w-20 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-20 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-20 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
         </div>
         <div className='flex flex-col gap-3'>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-1/2 h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
         </div>
      </div>
   );
};

export default SkeletonPostContent;
