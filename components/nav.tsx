import Link from 'next/link';

const Nav = () => {
   return (
      <nav className='flex items-center py-4 px-3 max-w-5xl mx-auto border-b'>
         <Link href={'/'} passHref>
            <h1 className='text-xl font-bold mr-5 tracking-tight'>
               Juhan&apos;s blog
            </h1>
         </Link>
         {/* menu */}
         <div>
            <Link href={'/'} passHref>
               <div>Bio</div>
            </Link>
         </div>
      </nav>
   );
};

export default Nav;
