import { menus } from '@/data';
import Link from 'next/link';
import SearchPost from './search';

const Nav = () => {
   return (
      <nav className='fixed top-0 left-0 w-full z-50'>
         <div className='flex items-center py-4 px-3 max-w-5xl mx-auto border-b bg-white'>
            <Link href={'/'} passHref>
               <h1 className='text-2xl md:text-3xl font-bold mr-10 tracking-tighter'>
                  Juhan&apos;s blog.
               </h1>
            </Link>
            {/* menu */}
            <div className='hidden lg:flex gap-5 items-center'>
               {menus.map((menu, index) => (
                  <Link href={menu.path} key={index} passHref>
                     <div className='font-light'>{menu.title}</div>
                  </Link>
               ))}
            </div>
            <SearchPost isMobile={false} />
         </div>
      </nav>
   );
};

export default Nav;
