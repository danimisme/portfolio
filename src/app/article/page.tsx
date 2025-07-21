import { getAllArticlesMeta } from "@/lib/markdown";
import { redirect } from "next/navigation";

export default function Article() {
  const articles = getAllArticlesMeta();

  if (articles.length > 0) {
    redirect(`/article/${articles[0].slug}`);
  }

  // Fallback jika tidak ada artikel
  return <div>Tidak ada artikel tersedia.</div>;
}
