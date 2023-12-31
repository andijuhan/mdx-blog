import { IPost } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface IPostCard {
   post: IPost;
}

const PostCard = ({ post }: IPostCard) => {
   return (
      <Link href={`/${post.slug}`} passHref>
         <div className='flex flex-col group rounded-md border overflow-hidden bg-white'>
            <div className='h-[250px]'>
               <Image
                  src={post.thumbnailUrl}
                  width={500}
                  height={500}
                  alt={post.title}
                  className='w-full h-full object-cover object-center group-hover:brightness-90 transition-all duration-300 border-b'
               />
            </div>
            <div className='flex flex-col gap-2 p-3 max-w-[700px]'>
               <h2 className='text-xl font-semibold tracking-tight group-hover:text-indigo-500 transition-colors duration-300 line-clamp-1'>
                  {post.title}
               </h2>
               <span className='text-gray-700'>{post.date}</span>
            </div>
         </div>
      </Link>
   );
};

export default PostCard;
