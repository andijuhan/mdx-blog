import { blogSetting } from '@/data';

const Footer = () => {
   return (
      <div className='w-full border-t mt-5 bg-gray-100'>
         <div className='p-5 max-w-5xl mx-auto text-center text-gray-700'>
            &copy; {new Date().getFullYear()} {blogSetting.title}. All rights
            reserved
         </div>
      </div>
   );
};

export default Footer;
