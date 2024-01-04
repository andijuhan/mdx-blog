import PostContent from '@/components/post-content';
import Link from 'next/link';
import { blogSetting } from '@/data';
import FeaturedImagePost from '@/components/featured-image-post';
import getContent from '@/actions/getContent';

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}) {
   // read route params then fetch data
   const { data } = await getContent(params.slug);

   // return an object
   return {
      title: data.title + ' | ' + blogSetting.title,
      description: data.description,
   };
}

const page = async ({ params }: { params: { slug: string } }) => {
   const { data, mdxSource } = await getContent(params.slug);

   return (
      <div className='w-full'>
         <FeaturedImagePost data={data} />
         <h1 className='text-2xl font-bold mb-3'>{data.title}</h1>
         <div className='mb-4 w-full flex overflow-x-scroll scrollbar-thin gap-4 border-b dark:border-b-gray-700 pb-2'>
            <div className='min-w-max'>
               📅 <span className='text-gray-500'>{data.date}</span>
            </div>
            <div className='min-w-max'>
               <span className='mr-2'>🏷</span>
               {data.tags.map((tag, index) => (
                  <Link href={`/tag/${tag}`} key={index} passHref>
                     <span className='text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 mr-2'>
                        #{tag}
                     </span>
                  </Link>
               ))}
            </div>
         </div>
         <PostContent mdxSource={mdxSource} />
      </div>
   );
};

export default page;
