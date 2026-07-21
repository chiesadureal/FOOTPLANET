import Image from "next/image";
import Link from "next/link";
import { articles } from "@/app/data/articles";
export default function Actualites() {
  return (
    <main className="min-h-screen px-10 py-16">

      <h1 className="text-5xl font-bold text-green-500 mb-10">
        📰 Dernières actualités
      </h1>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {articles.map((article) => (
    <div
      key={article.slug}
      className="bg-[#171717] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
    >
      <Image
        src={article.image}
        alt={article.titre}
        width={600}
        height={350}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <p className="text-red-600 text-sm font-bold">
          {article.categorie}
        </p>

        <h2 className="text-2xl font-bold text-white mt-3">
          {article.titre}
        </h2>

      <p className="text-white mt-3">
          {article.description}
        </p>

        <Link
          href={`/actualites/${article.slug}`}
          className="inline-block mt-5 text-red-600 font-bold hover:underline"
        >
          Lire l'article →
        </Link>
      </div>
    </div>
  ))}
</div>

    </main>
  );
}