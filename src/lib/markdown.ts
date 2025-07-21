import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleMeta } from '@/types/Article';

const articlesDir = path.join(process.cwd(), 'public/article');
const notFoundPath = path.join(process.cwd(), 'public/not-found');

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllArticlesMeta(): ArticleMeta[] {
  const articles = getArticleSlugs().map((slug) => {
    const fullPath = path.join(articlesDir, `${slug}.md`);
    const { data } = matter(fs.readFileSync(fullPath, 'utf8'));

    return {
      slug,
      title: data.title || slug,
      date: data.date,
    };
  });

  // Urutkan berdasarkan date terbaru
  return articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}


export function getArticleRaw(slug: string): string {
  const fullPath = path.join(articlesDir, `${slug}.md`);
  try {
    const data = fs.readFileSync(fullPath, 'utf8');
    return data
  } catch (e) {
    return fs.readFileSync(path.join(notFoundPath, '404.md'), 'utf8');
  }
  
}
