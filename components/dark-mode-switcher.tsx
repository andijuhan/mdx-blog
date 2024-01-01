'use client';
import { Moon, Sun } from 'lucide-react';
import { HTMLAttributes, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';

interface DarkModeSwitcherProps extends HTMLAttributes<HTMLButtonElement> {}

const DarkModeSwitcher = (props: DarkModeSwitcherProps) => {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const { theme, setTheme } = useTheme();
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <button
         {...props}
         onClick={() => setIsDarkMode(!isDarkMode)}
         className={twMerge(
            'text-white opacity-80 hover:opacity-95 transition-colors duration-300',
            props.className
         )}
      >
         {theme === 'dark' && (
            <Moon size={30} onClick={() => setTheme('light')} />
         )}
         {theme === 'light' && (
            <Sun size={30} onClick={() => setTheme('dark')} />
         )}
      </button>
   );
};

export default DarkModeSwitcher;
