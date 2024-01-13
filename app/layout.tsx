import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import SearchPost from "@/components/search";
import Footer from "@/components/footer";
import CategoryMenu from "@/components/category-menu";
import { blogSetting } from "@/data";
import { ThemeProvider } from "@/providers/theme-provider";
import Sidebar from "@/components/sidebar";
import GoogleAnalytics from "@/components/google-analytics";

export const metadata: Metadata = {
  title: blogSetting.title + " | " + blogSetting.description,
  description: blogSetting.description,
  verification: {
    google: "YlhSQT3f7gDtgKMhB3781x8arB0mkj8OCootpNImWhE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-[350px] bg-gray-100 dark:bg-gray-800">
        <ThemeProvider attribute="class" defaultTheme="light">
          <header>
            <Nav />
          </header>
          {/* mobile search */}
          <main className="mx-auto mt-16 min-h-screen max-w-4xl p-3 md:mt-20">
            <SearchPost isMobile={true} />
            <CategoryMenu />
            {children}
          </main>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          <Footer />
          <Sidebar />
        </ThemeProvider>
      </body>
    </html>
  );
}
