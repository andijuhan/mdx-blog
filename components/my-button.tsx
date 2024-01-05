'use client';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface DarkModeSwitcherProps extends HTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
}

const MyButton = (
   props: DarkModeSwitcherProps,
   { children }: DarkModeSwitcherProps
) => {
   return (
      <button
         {...props}
         className={twMerge(
            'bg-blue-500 text-white rounded-lg px-4 py-2',
            props.className
         )}
      >
         {children}
      </button>
   );
};

export default MyButton;
