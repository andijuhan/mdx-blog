import { Image as CoverImage } from "lucide-react";

const SkeletonPostCard = () => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-md border bg-white dark:border-gray-700 dark:bg-gray-700">
      <div className="flex h-[300px] w-full animate-pulse items-center justify-center bg-gray-300 text-gray-300 md:h-[250px] lg:h-[200px] dark:bg-gray-600 dark:text-gray-500">
        <CoverImage size={50} />
      </div>
      <div className="flex max-w-[700px] flex-col gap-3 p-3">
        <div className="h-5 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
        <div className="h-5 w-[90%] animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
        <div className="h-3 w-1/2 animate-pulse rounded bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </div>
  );
};

export default SkeletonPostCard;
