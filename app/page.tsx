
"use client";
import Link from "next/link";

const strains = [
  { name: "Dante's Inferno", brand: "MAD TIKI", slug: "dantes-inferno", thc: "28%", type: "Híbrido", 
    image: "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/73bcf64597891a25b5b8a33ee5d2eaa1",
    colors: { primary: "#FF6B35", secondary: "#C92A2A", accent: "#5F3DC4" }, emoji: "🔥" },
  { name: "Gaslight", brand: "LIT FARM", slug: "gaslight", thc: "25%", type: "Sativa", 
    image: "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c",
    colors: { primary: "#CCFF00", secondary: "#00FF88", accent: "#FFEB3B" }, emoji: "⚡" },
  { name: "Bourbon Street", brand: "LIT FARM", slug: "bourbon-street", thc: "26%", type: "Indica Híbrido", 
    image: "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/c7a9e2cf4346bd0953dced306105db01",
    colors: { primary: "#FFD700", secondary: "#8B008B", accent: "#FF8C00" }, emoji: "🎷" },
  { name: "Zoap Mintz", brand: "LIT FARM", slug: "zoap-mintz", thc: "28%", type: "Híbrido", 
    image: "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/bb4626e2cbcf36906c46471837611154",
    colors: { primary: "#00FFA3", secondary: "#FFFFFF", accent: "#00CED1" }, emoji: "🌿" },
  { name: "Cherry Zoda", brand: "UMAMI SEED CO", slug: "cherry-zoda", thc: "27%", type: "Híbrido Sativa", 
    image: "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/185993dc90f6279e97c6d585cb2ac0cf",
    colors: { primary: "#DC143C", secondary: "#FF1493", accent: "#FF69B4" }, emoji: "🍒" },
  { name: "Watermelon Z 2.0", brand: "KNOWN WASHERS", slug: "watermelon-z-2", thc: "29%", type: "Híbrido Indica", 
    image: "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/ac510e7aad265181f63c3396850ffa2a",
    colors: { primary: "#FF1493", secondary: "#32CD32", accent: "#FF69B4" }, emoji: "🍉" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            CULTIMED
          </h1>
          <p className="text-xl text-gray-400">Premium Cannabis Strains</p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Nuestras Cepas Premium</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strains.map((strain) => (
              <Link
                key={strain.slug}
                href={`/${strain.slug}`}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-gray-800 hover:border-gray-600 transition-all hover:scale-105"
              >
                <div className="text-7xl mb-4">{strain.emoji}</div>
                <h3 className="text-3xl font-black mb-2" style={{ color: strain.colors.primary }}>
                  {strain.name}
                </h3>
                <p className="text-gray-400 mb-2">{strain.brand}</p>
                <p className="text-sm text-gray-500">{strain.thc} THC • {strain.type}</p>
                <div className="mt-4 text-sm font-bold group-hover:text-green-400 transition-colors">
                  Ver detalles →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2025 CULTIMED Dispensary | Consumo responsable. Prohibida su venta a menores.</p>
      </footer>
    </div>
  );
}
