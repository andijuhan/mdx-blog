import PostContent from "@/components/post-content";
import Link from "next/link";
import { blogSetting } from "@/data";
import FeaturedImagePost from "@/components/featured-image-post";
import getContent from "@/actions/getContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // read route params then fetch data
  const { data } = await getContent(params.slug);

  // return an object
  return {
    title: data.title + " | " + blogSetting.title,
    description: data.description,
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { data, mdxSource } = await getContent(params.slug);

  return (
    <article className="w-full rounded bg-gray-50 p-2 shadow-lg md:p-5 dark:bg-gray-700">
      <FeaturedImagePost data={data} />
      <h1 className="mb-3 text-2xl font-bold capitalize">{data.title}</h1>
      <div className="mb-4 flex w-full gap-4 overflow-x-scroll border-b pb-2 scrollbar-thin dark:border-b-gray-600">
        <div className="min-w-max">
          📅{" "}
          <span className="capitalize text-gray-500 dark:text-gray-300">
            {data.date}
          </span>
        </div>
        <div className="min-w-max">
          <span className="mr-2">🏷</span>
          {data.tags.map((tag, index) => (
            <Link href={`/tag/${tag}`} key={index} passHref>
              <span className="mr-2 text-indigo-500 hover:text-indigo-700 dark:text-indigo-300">
                #{tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <PostContent mdxSource={mdxSource} />
    </article>
  );
};

export default page;
