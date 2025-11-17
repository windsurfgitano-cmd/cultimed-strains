
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const HERO_IMAGE = "https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c";

export default function GaslightPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animación sólo para el título, entrada con rebote
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40, scale: 0.93 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "elastic.out(1, 0.6)" }
    );
    // Imagen con fade suave
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, filter: "blur(2px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.5, delay: 0.4, ease: "power2.out" }
    );
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <section className="flex flex-col items-center py-12 px-4 sm:py-20">
        {/* Hero image, fade/blur animation */}
        <div ref={heroRef} className="w-full max-w-lg relative mb-5 flex justify-center">
          <img
            src={HERO_IMAGE}
            alt="Gaslight Cepa Hero"
            className="rounded-3xl shadow-xl w-full h-56 sm:h-72 object-cover border-2 border-lime-400"
            style={{ aspectRatio: "3/2", background: "#101d0b" }}
          />
        </div>
        {/* Title with elastic animation */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl font-black text-lime-400 tracking-tight text-center mb-3 uppercase"
        >
          GASLIGHT
        </h1>
        <div className="text-base sm:text-lg font-bold text-yellow-300 mb-3 text-center uppercase">
          by LIT FARM
        </div>
        <div className="max-w-xs sm:max-w-lg text-lg text-slate-100 text-center mb-5 font-medium">
          Sativa dominante. Ilumina tu experiencia con genética premium.
        </div>
        {/* CTA */}
        <Link
          href="/"
          className="inline-block px-7 py-4 bg-lime-400 hover:bg-lime-300 text-black rounded-xl font-black uppercase tracking-wider text-lg transition"
        >
          Comprar en Cultimed
        </Link>
      </section>

      {/* Info block sencillo, minimalista */}
      <section className="flex-1 px-4 py-6 max-w-xl w-full mx-auto">
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-lime-400">25%</div>
            <div className="text-xs text-gray-200 uppercase">THC</div>
          </div>
          <div>
            <div className="text-2xl font-black text-lime-200">{"<1%"}</div>
            <div className="text-xs text-gray-200 uppercase">CBD</div>
          </div>
        </div>
        <div className="mt-7">
          <h3 className="font-black text-lg text-white mb-1">Perfil</h3>
          <p className="text-base text-gray-100">
            Sativa dominante. Florece en{" "}
            <span className="text-yellow-200 font-semibold">8-9 semanas</span>. Efecto activo y creativo.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-black text-lg text-white mb-1">Terpenos y Aromas</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            <li className="bg-lime-900/20 border border-lime-700 rounded-full px-4 py-1 text-xs text-lime-300 font-bold">
              Citrus
            </li>
            <li className="bg-lime-900/20 border border-lime-700 rounded-full px-4 py-1 text-xs text-lime-300 font-bold">
              Pine
            </li>
            <li className="bg-yellow-600/10 border border-yellow-500 rounded-full px-4 py-1 text-xs text-yellow-200 font-bold">
              Gas
            </li>
          </ul>
        </div>
      </section>
      <footer className="py-6 font-mono text-xs text-gray-500 text-center border-t border-white/10 bg-black/30">
        CULTIMED Dispensary · LIT FARM · Consumo responsable. SOLO ADULTOS 18+
      </footer>
    </main>
  );
}
