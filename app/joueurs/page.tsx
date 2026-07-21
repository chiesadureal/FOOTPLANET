import Image from "next/image";

const joueurs = [
  {
    nom: "Kylian Mbappé",
    photo: "/images/mbappe.jpg",
    club: "Real Madrid",
    nationalite: "🇫🇷 France",
    poste: "Attaquant",
    age: 27,
    numero: 9,
  },
  {
    nom: "Lamine Yamal",
    photo: "/images/yamal.jpg",
    club: "FC Barcelone",
    nationalite: "🇪🇸 Espagne",
    poste: "Ailier droit",
    age: 19,
    numero: 19,
  },
  {
    nom: "Rodri",
    photo: "/images/rodri.jpg",
    club: "Manchester City",
    nationalite: "🇪🇸 Espagne",
    poste: "Milieu défensif",
    age: 30,
    numero: 16,
  },
  {
    nom: "Jude Bellingham",
    photo: "/images/bellingham.jpg",
    club: "Real Madrid",
    nationalite: "🏴 Angleterre",
    poste: "Milieu",
    age: 23,
    numero: 5,
  },
  {
    nom: "Erling Haaland",
    photo: "/images/haaland.jpg",
    club: "Manchester City",
    nationalite: "🇳🇴 Norvège",
    poste: "Attaquant",
    age: 26,
    numero: 9,
  },
  {
    nom: "Vinicius Jr",
    photo: "/images/vinicius.jpg",
    club: "Real Madrid",
    nationalite: "🇧🇷 Brésil",
    poste: "Ailier",
    age: 26,
    numero: 7,
  },
];

export default function JoueursPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold text-red-600 mb-10">
        👤 Les meilleurs joueurs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {joueurs.map((joueur) => (
          <div
            key={joueur.nom}
            className="bg-[#171717] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >

            <Image
              src={joueur.photo}
              alt={joueur.nom}
              width={500}
              height={500}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {joueur.nom}
              </h2>

              <p className="text-red-500 mt-2">
                {joueur.club}
              </p>

              <div className="mt-5 space-y-2 text-gray-300">

                <p><strong>Nationalité :</strong> {joueur.nationalite}</p>

                <p><strong>Poste :</strong> {joueur.poste}</p>

                <p><strong>Âge :</strong> {joueur.age} ans</p>

                <p><strong>Numéro :</strong> {joueur.numero}</p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}