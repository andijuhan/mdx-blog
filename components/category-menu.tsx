"use client";
import { categories } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryMenu = () => {
  const path = usePathname();

  return (
    <div className="mb-3 flex w-full gap-2 overflow-x-scroll border-b pb-3 scrollbar-thin dark:border-b-gray-700">
      {categories.map((category, index) => (
        <Link
          href={`/tag/${category.name}`}
          className={`${
            path.includes(`/tag/${category.name}`) && "border-gray-800"
          } min-w-max rounded-md border bg-white px-3 py-1 text-black transition-colors duration-300 hover:border-gray-800 dark:border-gray-700 dark:bg-gray-600 dark:text-gray-100`}
          key={index}
        >
          #{category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
