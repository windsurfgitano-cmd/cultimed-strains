
"use client";
import Link from "next/link";
const HERO_IMAGE = "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c";
export default function GaslightPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <section className="relative flex flex-col items-center justify-center px-4 pt-16 pb-12 sm:py-20">
        <img src={HERO_IMAGE} alt="Cepa Gaslight" className="w-full h-56 sm:h-72 object-cover rounded-3xl shadow-xl mb-7" style={{ border: "2px solid #ccff00", background: "#121" }} loading="lazy" />
        <h1 className="text-4xl sm:text-5xl font-black text-lime-400 tracking-tight drop-shadow-md text-center mb-3">GASLIGHT</h1>
        <h2 className="text-lg sm:text-xl text-yellow-300 font-bold tracking-wide uppercase mb-4 text-center">By LIT FARM</h2>
        <p className="max-w-xs sm:max-w-lg text-base sm:text-lg text-white text-center mb-4 font-medium">Sativa dominante. Premium. Ilumina tu experiencia con genética única y aromas brillantes.</p>
        <Link href="/" className="inline-block mt-2 px-7 py-4 bg-lime-400 text-black rounded-xl font-extrabold uppercase tracking-wide text-lg shadow-lg">Comprar en Cultimed</Link>
      </section>
      <section className="flex-1 px-4 sm:px-8 py-6 max-w-xl w-full mx-auto">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-lime-400">25%</div>
            <div className="text-xs sm:text-sm text-gray-200 uppercase tracking-wide">THC</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-lime-200">{"<1%"}</div>
            <div className="text-xs sm:text-sm text-gray-200 uppercase tracking-wide">CBD</div>
          </div>
        </div>
        <div className="mt-7">
          <h3 className="font-black text-lg text-white mb-1">Perfil</h3>
          <p className="text-base text-gray-100"><span className="text-lime-300 font-semibold">Sativa dominante.</span> Florece en <span className="text-yellow-200 font-semibold">8-9 semanas</span>. Efecto estimulante, activo y creativo.</p>
        </div>
        <div className="mt-6">
          <h3 className="font-black text-lg text-white mb-1">Terpenos y Aromas</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            <li className="bg-lime-900/20 border border-lime-700 rounded-full px-4 py-1 text-xs text-lime-300 font-bold">Citrus</li>
            <li className="bg-lime-900/20 border border-lime-700 rounded-full px-4 py-1 text-xs text-lime-300 font-bold">Pine</li>
            <li className="bg-yellow-600/10 border border-yellow-500 rounded-full px-4 py-1 text-xs text-yellow-200 font-bold">Gas</li>
          </ul>
        </div>
      </section>
      <footer className="py-6 font-mono text-xs text-gray-500 text-center border-t border-white/10 bg-black/30">CULTIMED Dispensary · LIT FARM · Consumo responsable. SOLO ADULTOS 18+</footer>
    </main>
  );
}
