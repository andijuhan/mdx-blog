"use client";
import { Moon, Sun } from "lucide-react";
import { HTMLAttributes, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

interface DarkModeSwitcherProps extends HTMLAttributes<HTMLDivElement> {}

const DarkModeSwitcher = (props: DarkModeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      {...props}
      className={twMerge(
        "cursor-pointer text-white opacity-60 transition-colors duration-300 hover:animate-pulse hover:opacity-95",
        props.className,
      )}
    >
      {theme === "dark" && <Moon onClick={() => setTheme("light")} />}
      {theme === "light" && <Sun onClick={() => setTheme("dark")} />}
    </div>
  );
};

export default DarkModeSwitcher;
