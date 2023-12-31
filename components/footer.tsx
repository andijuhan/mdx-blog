import { blogSetting } from "@/data";

const Footer = () => {
  return (
    <div className="mt-5 w-full border-t bg-gray-50 shadow-lg dark:border-t-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl p-5 text-center text-gray-700 dark:text-gray-200">
        &copy; {new Date().getFullYear()} {blogSetting.title}. All rights
        reserved
      </div>
    </div>
  );
};

export default Footer;
