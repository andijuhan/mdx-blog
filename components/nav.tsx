import { menus, blogSetting } from '@/data';
import Link from 'next/link';
import SearchPost from './search';

const Nav = () => {
   return (
      <nav className='fixed top-0 left-0 w-full z-50 bg-black'>
         <div className='flex items-center py-4 px-3 max-w-4xl mx-auto '>
            <Link href={'/'} passHref>
               <h1 className='text-2xl text-indigo-400 font-bold md:font-black mr-10 tracking-tighter'>
                  {blogSetting.title}
               </h1>
            </Link>
            {/* menu */}
            <div className='hidden lg:flex gap-7 items-center'>
               {menus.map((menu, index) => (
                  <Link href={menu.path} key={index} passHref>
                     <span className='text-gray-100 hover:text-indigo-300 font-medium'>
                        {menu.title}
                     </span>
                  </Link>
               ))}
            </div>
            <SearchPost isMobile={false} />
         </div>
      </nav>
   );
};

export default Nav;
