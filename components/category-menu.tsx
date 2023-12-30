import { categories } from '@/data';
import Link from 'next/link';

const CategoryMenu = () => {
   return (
      <div className='flex gap-2 flex-wrap mb-3'>
         {categories.map((category, index) => (
            <Link
               href={`/tag/${category.name}`}
               className='py-1 px-3 rounded-md border bg-white hover:border-gray-800 transition-colors duration-300 text-black text-xs md:text-base'
               key={index}
            >
               #{category.name}
            </Link>
         ))}
      </div>
   );
};

export default CategoryMenu;
