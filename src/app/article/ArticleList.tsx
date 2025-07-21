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
            <p
              className={`
                relative article-item mb-1
                text-gray-600 dark:text-gray-400
                hover:text-gray-800 dark:hover:text-blue-400
                transition-colors
                ${pathName === `/article/${art.slug}` ? "font-bold active" : ""}
              `}
            >
              {art.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
