import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/nav';
import SearchPost from '@/components/search';
import Footer from '@/components/footer';
import CategoryMenu from '@/components/category-menu';
import { blogSetting } from '@/data';

export const metadata: Metadata = {
   title: blogSetting.title + ' | ' + blogSetting.description,
   description: blogSetting.description,
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en'>
         <body className='bg-gray-50'>
            <Nav />
            {/* mobile search */}
            <main className='p-3 max-w-4xl mx-auto mt-16 md:mt-20 min-h-screen'>
               <SearchPost isMobile={true} />
               <CategoryMenu />
               {children}
            </main>
            <Footer />
         </body>
      </html>
   );
}
