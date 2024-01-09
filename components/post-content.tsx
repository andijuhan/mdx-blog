"use client";
import { MDXRemote } from "next-mdx-remote";
import Button from "@/components/button";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

interface IPostContent {
  mdxSource: any;
}

const PostContent = ({ mdxSource }: IPostContent) => {
  const components = { Button };

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  }, []);

  return (
    <div className="content tracking-wide dark:text-gray-200">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default PostContent;
