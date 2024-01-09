"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ISearchPost {
  isMobile: boolean;
}

const SearchPost = ({ isMobile }: ISearchPost) => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!keyword) return;
    if (e.key === "Enter") {
      setKeyword("");
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div
      className={`${
        isMobile ? "mb-3 flex md:hidden" : "ml-auto hidden md:flex md:w-[280px]"
      }  items-center gap-3`}
    >
      <div className="flex w-full items-center">
        <input
          className="w-full rounded-md border p-2 pr-[40px] outline-none dark:border-gray-700"
          type="search"
          placeholder="Search Posts"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleSearch}
        />
        <Search size={30} className="-ml-[40px] opacity-30" />
      </div>
    </div>
  );
};

export default SearchPost;
