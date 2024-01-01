import { blogSetting } from '@/data';

const Footer = () => {
   return (
      <div className='w-full border-t dark:border-t-gray-800 mt-5 bg-gray-100 dark:bg-gray-900'>
         <div className='p-5 max-w-5xl mx-auto text-center text-gray-700 dark:text-gray-200'>
            &copy; {new Date().getFullYear()} {blogSetting.title}. All rights
            reserved
         </div>
      </div>
   );
};

export default Footer;
