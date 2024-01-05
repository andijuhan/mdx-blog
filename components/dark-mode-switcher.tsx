'use client';
import { Moon, Sun } from 'lucide-react';
import { HTMLAttributes, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';

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
            'text-white opacity-60 hover:opacity-95 transition-colors hover:animate-pulse duration-300 cursor-pointer',
            props.className
         )}
      >
         {theme === 'dark' && <Moon onClick={() => setTheme('light')} />}
         {theme === 'light' && <Sun onClick={() => setTheme('dark')} />}
      </div>
   );
};

export default DarkModeSwitcher;
