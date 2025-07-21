import { ArticleMeta } from "@/types/Article";
import { ReactNode } from "react";
import { getAllArticlesMeta } from "@/lib/markdown";
import NavbarWithProvider from "@/components/Layout/NavbarWithProvider";
import Footer from "@/components/Layout/Footer";
import Sidebar from "./Sidebar";

// agar di‑bundle pada build time:
export const metadata = {
  title: "Artikel",
};

export default function ArticleLayout({ children }: { children: ReactNode }) {
  const articles: ArticleMeta[] = getAllArticlesMeta();

  return (
    <>
      <div className="flex min-h-screen pt-14 dark:bg-dark">
        <Sidebar articles={articles} />
        <main className="flex-1 font-poppins min-h-screen flex flex-col justify-between">
          <NavbarWithProvider />
          {children}
          <div className="h-32"></div>
          <Footer />
        </main>
      </div>
    </>
  );
}
