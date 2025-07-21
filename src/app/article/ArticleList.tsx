"use client";
import { ArticleMeta } from "@/types/Article";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  articles: ArticleMeta[];
}
export default function ArticleList({ articles }: Props) {
  const pathName = usePathname();
  return (
    <ul>
      {articles.map((art) => (
        <li key={art.slug} className="mb-1">
          <Link href={`/article/${art.slug}`}>
            <p className={`text-gray-600 dark:text-gray-400 hover:text-gray-800 ${pathName === `/article/${art.slug}` ? "font-bold" : ""}`}>
              {art.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
