import { Image as CoverImage } from "lucide-react";

const SkeletonPostContent = () => {
  return (
    <div className="w-full">
      <div className="mb-3 flex h-[200px] w-full animate-pulse items-center justify-center rounded border bg-gray-300 text-gray-400 sm:h-[400px] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-500">
        <CoverImage size={50} />
      </div>
      <div className="mb-4 h-7 w-[90%] animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
      <div className="mb-4 flex w-full gap-4 overflow-x-scroll border-b pb-2 scrollbar-thin dark:border-b-gray-700">
        <div className="h-7 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-7 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-7 w-20 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-5 w-1/2 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default SkeletonPostContent;
