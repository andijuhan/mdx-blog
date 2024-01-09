import { menus, blogSetting } from "@/data";
import Link from "next/link";
import SearchPost from "./search";
import DarkModeSwitcher from "./dark-mode-switcher";
import MobileMenuButton from "./mobile-menu-button";

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black shadow-lg">
      <div className="mx-auto flex max-w-4xl items-center px-3 py-4 ">
        <Link href={"/"} passHref>
          <h1 className="mr-10 text-xl font-bold text-indigo-400">
            👨🏻‍💻{blogSetting.title}
          </h1>
        </Link>
        {/* menu */}
        <div className="hidden items-center gap-7 lg:flex">
          {menus.map((menu, index) => (
            <Link href={menu.path} key={index} passHref>
              <span className="text-gray-100 hover:text-indigo-300 dark:text-gray-300">
                {menu.title}
              </span>
            </Link>
          ))}
        </div>

        <SearchPost isMobile={false} />
        <DarkModeSwitcher className="ml-5 hidden lg:block" />
        <MobileMenuButton />
      </div>
    </nav>
  );
};

export default Nav;
