import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "FootPlanet",
  description: "Actualités football",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#080808] text-white">

        <nav className="flex justify-between items-center px-10 py-6 bg-black border-b border-red-600 shadow-lg">

          <h1 className="text-3xl font-bold text-red-600">
            ⚽ FootPlanet
          </h1>

          <div className="flex text-green-500 gap-8">
            <a href="/">Accueil</a>
            <a href="/actualites">Actualités</a>
            <a href="/joueurs">Joueurs</a>
          </div>

        </nav>

        {children}

        <footer className="mt-20 text-center py-10 bg-black">
          © 2026 FootPlanet - Actualités Football
        </footer>
      </body>
    </html>
  );
}