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
            isMobile ? 'flex md:hidden mb-3' : 'hidden md:flex ml-auto'
         }  gap-3 items-center`}
      >
         <form className='w-full'>
            <input
               className='border p-2 rounded-md w-full md:max-w-xs outline-none'
               type='search'
               placeholder='Search Posts'
            />
         </form>
         <Search className='cursor-pointer' />
      </div>
   );
};

export default SearchPost;
