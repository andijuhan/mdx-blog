import { menus, blogSetting } from '@/data';
import Link from 'next/link';
import SearchPost from './search';
import DarkModeSwitcher from './dark-mode-switcher';
import MobileMenuButton from './mobile-menu-button';

const Nav = () => {
   return (
      <nav className='fixed top-0 left-0 w-full z-50 bg-black shadow-lg'>
         <div className='flex items-center py-4 px-3 max-w-4xl mx-auto '>
            <Link href={'/'} passHref>
               <h1 className='text-xl text-indigo-400 font-bold mr-10 tracking-tighter'>
                  👨🏻‍💻{blogSetting.title}
               </h1>
            </Link>
            {/* menu */}
            <div className='hidden lg:flex gap-7 items-center'>
               {menus.map((menu, index) => (
                  <Link href={menu.path} key={index} passHref>
                     <span className='text-gray-100 dark:text-gray-300 hover:text-indigo-300'>
                        {menu.title}
                     </span>
                  </Link>
               ))}
            </div>

            <SearchPost isMobile={false} />
            <DarkModeSwitcher className='ml-5 hidden lg:block' />
            <MobileMenuButton />
         </div>
      </nav>
   );
};

export default Nav;
