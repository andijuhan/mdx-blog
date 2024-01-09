"use client";
import { useStoreSidebar } from "@/hooks/use-store-sidebar";
import { Menu, X } from "lucide-react";

const MobileMenuButton = () => {
  const { toogle, isOpen } = useStoreSidebar();
  return (
    <button className="ml-auto text-white lg:hidden dark:text-white">
      {isOpen ? (
        <X size={30} onClick={toogle} />
      ) : (
        <Menu size={30} onClick={toogle} />
      )}
    </button>
  );
};

export default MobileMenuButton;
