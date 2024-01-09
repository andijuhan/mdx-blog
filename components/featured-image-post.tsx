"use client";

import { IPost } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface FeaturedImagePostProps {
  data: IPost;
}

const FeaturedImagePost = ({ data }: FeaturedImagePostProps) => {
  const [isImageReady, setIsImageReady] = useState(false);

  return (
    <div className="mb-3 h-[200px] w-full overflow-hidden rounded border sm:h-[400px] dark:border-gray-700">
      <Image
        src={data.thumbnailUrl}
        alt={data.title}
        width={800}
        height={500}
        className={`h-[200px] w-full object-cover object-center transition-all duration-[1s] sm:h-[400px] ${
          isImageReady ? "blur-0" : "blur-3xl"
        }`}
        onLoad={() => setIsImageReady(true)}
      />
    </div>
  );
};

export default FeaturedImagePost;
