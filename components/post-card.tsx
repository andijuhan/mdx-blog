"use client";
import { IPost } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface IPostCard {
  post: IPost;
}

const PostCard = ({ post }: IPostCard) => {
  const [isImageReady, setIsImageReady] = useState(false);

  return (
    <Link href={`/${post.slug}`} passHref>
      <div className="group flex flex-col overflow-hidden rounded-md border bg-white dark:border-gray-700 dark:bg-gray-700">
        <div className="h-[200px] w-full overflow-hidden md:h-[250px] lg:h-[170px]">
          <Image
            src={post.thumbnailUrl}
            width={300}
            height={300}
            quality={75}
            alt={post.title}
            className={`h-full w-full rounded border object-cover object-center transition-all duration-[1s] group-hover:brightness-90 dark:border-gray-700 ${
              isImageReady ? "blur-0" : "blur-3xl"
            }`}
            onLoad={() => setIsImageReady(true)}
          />
        </div>
        <div className="flex max-w-[700px] flex-col gap-2 p-3">
          <h2 className="line-clamp-2 text-xl font-semibold capitalize tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-indigo-500 md:text-lg dark:text-gray-200 dark:group-hover:text-indigo-400">
            {post.title}
          </h2>
          <span className="text-gray-700 dark:text-gray-300">{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
