'use client';
import { categories } from '@/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryMenu = () => {
   const path = usePathname();

   return (
      <div className='flex gap-2 flex-wrap mb-3 border-b dark:border-b-gray-700 pb-3'>
         {categories.map((category, index) => (
            <Link
               href={`/tag/${category.name}`}
               className={`${
                  path.includes(category.name) && 'border-gray-800'
               } py-1 px-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-600 hover:border-gray-800 transition-colors duration-300 text-black dark:text-gray-100 text-xs md:text-base`}
               key={index}
            >
               #{category.name}
            </Link>
         ))}
      </div>
   );
};

export default CategoryMenu;
