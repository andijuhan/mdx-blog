import { Image } from 'lucide-react';

const loading = () => {
   return (
      <div className='w-full'>
         <div className='w-full flex items-center justify-center h-[200px] sm:h-[400px] bg-gray-300 dark:bg-gray-700 dark:text-gray-500 text-gray-300 rounded mb-3 border dark:border-gray-700 animate-pulse'>
            <Image size={50} />
         </div>
         <h1 className='text-3xl font-bold mb-3'></h1>
         <div className='mb-4 w-full flex overflow-x-scroll scrollbar-thin gap-4 border-b dark:border-b-gray-700 pb-2'>
            <div className='w-20 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-20 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-20 h-7 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
         </div>
         <div className='flex flex-col gap-3'>
            <div className='w-full h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
            <div className='w-full h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>

            <div className='w-1/2 h-screen sm:h-5 bg-gray-300 dark:bg-gray-700 rounded animate-pulse'></div>
         </div>
      </div>
   );
};

export default loading;
