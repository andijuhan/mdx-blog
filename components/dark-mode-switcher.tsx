'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkModeSwitcher = () => {
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
         onClick={() => setIsDarkMode(!isDarkMode)}
         className='hidden md:block text-white opacity-80 hover:opacity-95 transition-colors duration-300 ml-5'
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
