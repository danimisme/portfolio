import { ArticleMeta } from "@/types/Article";
import { ReactNode } from "react";
import { getAllArticlesMeta } from "@/lib/markdown";
import NavbarWithProvider from "@/components/Layout/NavbarWithProvider";
import ArticleList from "./ArticleList";
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
        <main className="flex-1">
          <NavbarWithProvider />
          {children}
          <div className="h-32"></div>
          <Footer />
        </main>
      </div>
    </>
  );
}
