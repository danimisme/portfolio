import { getAllArticlesMeta } from "@/lib/markdown";
import { redirect } from "next/navigation";

export default function Article() {
  const articles = getAllArticlesMeta();

  if (articles.length > 0) {
    redirect(`/article/${articles[0].slug}`);
  }

  // Fallback if there are no articles
  return <div>No articles available.</div>;
}
