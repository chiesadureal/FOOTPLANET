import Image from "next/image";
import { articles } from "@/app/data/articles";

export default function ArticlePage({
  params,
}: {
  params: { article: string };
}) {

  const article = articles.find(
    (item) => item.slug === params.article
  );

  if (!article) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-4xl font-bold">
          Article introuvable
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-10 py-12">

      <article className="max-w-4xl mx-auto bg-[#171717] rounded-xl overflow-hidden">

        <Image
          src={article.image}
          alt={article.titre}
          width={1200}
          height={600}
          className="w-full h-[450px] object-cover"
        />

        <div className="p-10">

          <p className="text-red-600 font-bold">
            {article.categorie}
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {article.titre}
          </h1>

          <p className="text-gray-400 mt-5">
            {article.date}
          </p>

          <div className="mt-8 text-lg text-gray-300 space-y-5">

            {article.contenu.map((texte, index) => (
              <p key={index}>
                {texte}
              </p>
            ))}

          </div>

        </div>

      </article>

    </main>
  );
}