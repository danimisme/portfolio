import { ArticleMeta } from '@/types/Article';
import { ReactNode } from 'react';
import { getAllArticlesMeta } from '@/lib/markdown';
import NavbarWithProvider from '@/components/Layout/NavbarWithProvider';
import ArticleList from './ArticleList';

// agar di‑bundle pada build time:
export const metadata = {
  title: 'Artikel',
};

export default function ArticleLayout({ children }: { children: ReactNode }) {
  const articles: ArticleMeta[] = getAllArticlesMeta();

  return (
    <>
    <div className="flex min-h-screen pt-14 dark:bg-dark" >
      <aside className="w-64 bg-gray-100 dark:bg-darkgray p-4 border-r dark:border-gray-600">
        <div className='sticky top-16'>
          <h2 className="font-bold mb-4 dark:text-white">Daftar Artikel</h2>
          <ArticleList articles={articles} />
        </div>
      </aside>
      <main className="flex-1 p-8"> 
    <NavbarWithProvider />

        {children}
        </main>
    </div>
    </>
  );
}

