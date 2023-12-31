'use client';
import { categories } from '@/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategoryMenu = () => {
   const path = usePathname();
   console.log(path);

   return (
      <div className='flex gap-2 flex-wrap mb-3 border-b pb-3'>
         {categories.map((category, index) => (
            <Link
               href={`/tag/${category.name}`}
               className={`${
                  path.includes(category.name) && 'border-gray-800'
               } py-1 px-3 rounded-md border bg-white hover:border-gray-800 transition-colors duration-300 text-black text-xs md:text-base`}
               key={index}
            >
               #{category.name}
            </Link>
         ))}
      </div>
   );
};

export default CategoryMenu;
