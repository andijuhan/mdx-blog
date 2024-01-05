'use client';
import { menus } from '@/data';
import Link from 'next/link';
import React, { useEffect } from 'react';
import DarkModeSwitcher from './dark-mode-switcher';
import { useStoreSidebar } from '@/hooks/use-store-sidebar';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
   const { isOpen, close } = useStoreSidebar();
   const pathName = usePathname();

   useEffect(() => {
      close();
   }, [pathName]);

   return (
      <aside>
         <div
            className={`${
               !isOpen && 'opacity-0 w-0 h-0'
            } fixed inset-0 top-[60px] md:hidden max-h-screen z-[50] bg-black/50 backdrop-blur-sm transition-all duration-500`}
            onClick={() => close()}
         ></div>
         <div
            className={`${
               !isOpen && 'transform -translate-x-full'
            } fixed inset-0 top-[60px] z-[51] w-[256px] max-w-[256px] px-7 h-screen overflow-hidden bg-black transition-all duration-300 opacity-100`}
         >
            <DarkModeSwitcher className='my-7' />
            <div className='flex flex-col gap-5 w-full'>
               {menus.map((menu, index) => (
                  <Link
                     href={menu.path}
                     key={index}
                     passHref
                     className='border-b border-gray-900 pb-2 w-full'
                  >
                     <span className='text-gray-100 dark:text-gray-300 hover:text-indigo-300 font-medium'>
                        {menu.title}
                     </span>
                  </Link>
               ))}
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
