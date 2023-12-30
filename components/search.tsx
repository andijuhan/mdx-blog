'use client';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface ISearchPost {
   isMobile: boolean;
}

const SearchPost = ({ isMobile }: ISearchPost) => {
   return (
      <div
         className={`${
            isMobile
               ? 'flex md:hidden mb-3'
               : 'hidden md:flex md:w-[320px] ml-auto'
         }  gap-3 items-center`}
      >
         <form className='w-full flex items-center'>
            <input
               className='border p-2 rounded-md w-full outline-none pr-[40px]'
               type='search'
               placeholder='Search Posts'
            />
            <Search
               size={30}
               className='cursor-pointer opacity-30 -ml-[40px]'
            />
         </form>
      </div>
   );
};

export default SearchPost;
