
"use client";
import { useParams } from "next/navigation";
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

export default function StrainPage() {
  const params = useParams();
  const strain = strains.find(s => s.slug === params.slug);

  if (!strain) return <div className="min-h-screen bg-black text-white flex items-center justify-center"><h1 className="text-4xl">Cepa no encontrada</h1></div>;

  return (
    <div className="min-h-screen bg-black text-white">
      <Link href="/" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur">
        ← Volver
      </Link>

      <section className="relative h-screen flex items-center justify-center" style={{ backgroundImage: `url(${strain.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black mb-6" style={{ color: strain.colors.primary }}>
            {strain.name.toUpperCase()}
          </h1>
          <p className="text-3xl mb-4" style={{ color: strain.colors.secondary }}>
            BY {strain.brand}
          </p>
          <p className="text-xl mb-8 text-gray-300">
            {strain.type} • {strain.thc} THC
          </p>
          <a 
            href="https://cultimed.cl" 
            target="_blank"
            className="inline-block px-12 py-5 rounded-lg text-xl font-bold transition-transform hover:scale-110" 
            style={{ background: `linear-gradient(135deg, ${strain.colors.primary}, ${strain.colors.accent})`, color: '#000' }}
          >
            Comprar en CULTIMED
          </a>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 text-center">Detalles de la Cepa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-4xl font-black mb-2" style={{ color: strain.colors.primary }}>
                {strain.thc} THC
              </h3>
              <p className="text-gray-400">Alta Potencia</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-4xl font-black mb-2" style={{ color: strain.colors.secondary }}>
                {strain.type}
              </h3>
              <p className="text-gray-400">Genética Premium</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-4xl font-black mb-2" style={{ color: strain.colors.accent }}>
                {strain.brand}
              </h3>
              <p className="text-gray-400">Cultivador Experto</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2025 CULTIMED | {strain.brand} | Consumo responsable</p>
      </footer>
    </div>
  );
}
