'use client';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ISearchPost {
   isMobile: boolean;
}

const SearchPost = ({ isMobile }: ISearchPost) => {
   const [keyword, setKeyword] = useState('');
   const router = useRouter();

   const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!keyword) return;
      if (e.key === 'Enter') {
         router.push(`/search/${keyword}`);
      }
   };

   return (
      <div
         className={`${
            isMobile
               ? 'flex md:hidden mb-3'
               : 'hidden md:flex md:w-[320px] ml-auto'
         }  gap-3 items-center`}
      >
         <div className='w-full flex items-center'>
            <input
               className='border p-2 rounded-md w-full outline-none pr-[40px]'
               type='search'
               placeholder='Search Posts'
               value={keyword}
               onChange={(e) => setKeyword(e.target.value)}
               onKeyDown={handleSearch}
            />
            <Search size={30} className='opacity-30 -ml-[40px]' />
         </div>
      </div>
   );
};

export default SearchPost;
