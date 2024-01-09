"use client";
import { menus } from "@/data";
import Link from "next/link";
import React, { useEffect } from "react";
import DarkModeSwitcher from "./dark-mode-switcher";
import { useStoreSidebar } from "@/hooks/use-store-sidebar";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { isOpen, close } = useStoreSidebar();
  const pathName = usePathname();

  useEffect(() => {
    close();
  }, [pathName]);

  return (
    <aside>
      <div
        className={`${
          !isOpen && "h-0 w-0 opacity-0"
        } fixed inset-0 top-[60px] z-[50] max-h-screen bg-black/50 backdrop-blur-sm transition-all duration-500 md:hidden`}
        onClick={() => close()}
      ></div>
      <div
        className={`${
          !isOpen && "-translate-x-full transform"
        } fixed inset-0 top-[60px] z-[51] h-screen w-[256px] max-w-[256px] overflow-hidden bg-black px-7 opacity-100 transition-all duration-300`}
      >
        <DarkModeSwitcher className="my-7" />
        <div className="flex w-full flex-col gap-5">
          {menus.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              passHref
              className="w-full border-b border-gray-900 pb-2"
            >
              <span className="font-medium text-gray-100 hover:text-indigo-300 dark:text-gray-300">
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
