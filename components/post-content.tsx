"use client";
import { MDXRemote } from "next-mdx-remote";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

interface IPostContent {
  mdxSource: any;
}

const PostContent = ({ mdxSource }: IPostContent) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  }, []);

  return (
    <div className="content w-full overflow-x-auto tracking-wide dark:text-gray-200">
      <MDXRemote
        {...mdxSource}
        components={{
          a: (props) => <a target="_blank" rel="nofollow" {...props} />,
        }}
      />
    </div>
  );
};

export default PostContent;
