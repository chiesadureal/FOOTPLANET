import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black border-b border-red-600">

      <Link
        href="/"
        className="text-3xl font-bold text-red-600"
      >
        ⚽ FOOTPLANET
      </Link>

      <div className="flex gap-8 text-green-500 font-semibold">

        <Link href="/">Accueil</Link>

        <Link href="/actualites">Actualités</Link>

        <Link href="/matchs">Matchs</Link>

        <Link href="/classements">Classements</Link>

        <Link href="/joueurs">Joueurs</Link>

      </div>

    </nav>
  );
}