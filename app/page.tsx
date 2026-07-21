import Image from "next/image";
export default function Home() {
const articles = [
  {
    image: "/images/espagne.jpg",
    titre: "L'Espagne couronnée sur le toit du football",
    description: "La Roja réalise le doublé Euro/Mondial.",
  },

  {
    image: "/images/rodri.jpg",
    titre: "Rodri meilleur joueur de la Coupe du monde",
    description: "Le milieu de Manchester City principal artisan du sacre de sa nation",
  },

  {
    image: "/images/olise.jpg",
    titre: "Le mercato européen s'accélère",
    description: "Les clubs préparent leurs prochaines recrues.",
  },
];

  return (
<main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-10 py-8">

      {/* Grande actualité */}
      <section className="bg-slate-800 rounded-2xl p-10 mb-12">

        <p className="text-green-500 font-bold text-lg">
          À LA UNE
        </p>

        <h1 className="text-5xl font-bold text-green-500 mt-4">
          Toute la planète football au même endroit
        </h1>

        <p className="text-gray-300 text-xl mt-5 max-w-3xl">
          Retrouvez les dernières informations,
          résultats, analyses et transferts du monde du football.
        </p>

        <button className="mt-8 bg-green-500 px-8 py-3 rounded-xl font-bold">
          Lire les dernières infos
        </button>

      </section>


      {/* Articles */}
      <section>

        <h2 className="text-4xl font-bold mb-8">
          Dernières actualités
        </h2>


        <div className="grid grid-cols-3 gap-8">

          {articles.map((article, index) => (

            <article
              key={index}
              className="bg-slate-800 rounded-xl p-6"
            >

              <div className="mb-5">
  <Image
    src={article.image}
    alt={article.titre}
    width={500}
    height={300}
    className="w-full h-48 object-cover rounded-lg"
  />
</div>

              <h3 className="text-2xl font-bold text-green-500">
                {article.titre}
              </h3>

              <p className="text-gray-300 mt-3">
                {article.description}
              </p>

           <a
  href={`/actualites/${article.slug}`}
  className="text-red-600 font-bold"
>
  Lire plus →
</a>

            </article>

          ))}

        </div>

      </section>

{/* Résultats des matchs */}

<section className="mt-16">

  <h2 className="text-4xl font-bold mb-8">
    ⚽ Derniers résultats
  </h2>

  <div className="grid grid-cols-3 gap-8">

    <div className="bg-slate-800 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold text-green-500">
        Espagne
      </h3>

      <p className="text-3xl font-bold text-green-500 my-4">
        2 - 0
      </p>

      <h3 className="text-xl font-bold text-green-500">
        France
      </h3>
    </div>


    <div className="bg-slate-800 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold text-green-500">
        Angleterre
      </h3>

      <p className="text-3xl font-bold text-green-500 my-4">
        1 - 2
      </p>

      <h3 className="text-xl font-bold text-green-500">
        Argentine
      </h3>
    </div>


    <div className="bg-slate-800 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold text-green-500">
        Espagne
      </h3>

      <p className="text-3xl font-bold text-green-500 my-4">
        1 - 0
      </p>

      <h3 className="text-xl font-bold text-green-500">
        Argentine
      </h3>
    </div>

  </div>

</section>

    </main>
    
  );
}