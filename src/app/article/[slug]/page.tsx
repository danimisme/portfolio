import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getArticleSlugs, getArticleRaw } from '@/lib/markdown';
import matter from 'gray-matter';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
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
    <article className="prose md:prose-md lg:max-w-5xl mx-auto dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
