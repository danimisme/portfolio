import ReactMarkdown from 'react-markdown';
import { getArticleSlugs, getArticleRaw } from '@/lib/markdown';
import matter from 'gray-matter';
import { Metadata } from 'next';


export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const raw = getArticleRaw(slug);
  const { data } = matter(raw);
  return {
    title: data.title || "Artikel",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const raw = getArticleRaw(slug);
  const { content } = matter(raw);

  return (
    <article className="prose mt-4 md:mt-8 lg:mt-12 md:prose-md lg:max-w-5xl mx-auto dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
