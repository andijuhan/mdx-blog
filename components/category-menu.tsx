import { categories } from '@/data';

const CategoryMenu = () => {
   return (
      <div className='flex gap-2 flex-wrap mb-3'>
         {categories.map((category, index) => (
            <button
               className='py-1 px-3 rounded-md border hover:border-gray-800 transition-colors duration-300 text-black text-sm md:text-base'
               key={index}
            >
               #{category.name}
            </button>
         ))}
      </div>
   );
};

export default CategoryMenu;
