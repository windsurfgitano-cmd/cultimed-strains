
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function GaslightPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import GSAP dynamically to avoid SSR issues
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.from(".hero-title", {
          opacity: 0,
          y: 100,
          duration: 1.5,
          ease: "power4.out"
        });

        gsap.from(".hero-subtitle", {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.4
        });

        // Scroll-triggered animations
        gsap.utils.toArray(".story-section").forEach((section: any) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power3.out"
          });
        });

        // Neon pulse effect
        gsap.to(".neon-glow", {
          opacity: 0.6,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });

        // Stats counter animation
        gsap.utils.toArray(".stat-number").forEach((stat: any) => {
          gsap.to(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top 80%"
            },
            innerText: stat.dataset.value,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.out"
          });
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Link href="/" className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur transition-all">
        ← Volver
      </Link>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="neon-glow absolute inset-0 bg-gradient-radial from-lime-500/20 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="hero-title text-8xl md:text-9xl font-black mb-6 text-lime-400 drop-shadow-[0_0_30px_rgba(204,255,0,0.8)]">
            GASLIGHT
          </h1>
          <p className="hero-subtitle text-3xl md:text-4xl mb-4 text-yellow-300 font-bold">
            BY LIT FARM
          </p>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            En las profundidades del laboratorio de LIT FARM, donde la ciencia se encuentra con el arte, 
            nació una cepa destinada a iluminar las mentes más brillantes...
          </p>
        </div>
      </section>

      {/* Chapter 1: The Origin */}
      <section className="story-section py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-20 bg-gradient-to-b from-lime-400 to-green-500" />
            <h2 className="text-5xl font-black text-lime-400">
              Capítulo I: El Nacimiento de la Luz
            </h2>
          </div>

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              Todo comenzó con una visión: crear la cepa perfecta que pudiera <span className="text-lime-400 font-bold">encender</span> 
              la creatividad sin apagar la claridad mental. Los maestros cultivadores de LIT FARM sabían que tenían 
              que ir más allá de lo convencional.
            </p>

            <p>
              Cruzaron las genéticas más puras de <span className="text-yellow-300 font-semibold">Zkittlez</span> con 
              el legendario <span className="text-yellow-300 font-semibold">OG</span>, y algo mágico sucedió. 
              Las plantas comenzaron a brillar con un tono verde lima eléctrico, como si la energía misma 
              fluyera a través de sus tricomas.
            </p>

            <div className="my-12 p-8 bg-gradient-to-r from-lime-500/10 to-green-500/10 border-l-4 border-lime-400 rounded-r-2xl">
              <p className="text-lime-300 italic text-2xl font-light">
                "No estábamos cultivando cannabis. Estábamos cultivando iluminación."
              </p>
              <p className="text-gray-400 mt-2 text-sm">— Maestro Cultivador, LIT FARM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-lime-500/20 to-transparent border border-lime-500/30 rounded-2xl">
              <div className="text-7xl mb-4">⚡</div>
              <div className="stat-number text-6xl font-black text-lime-400 mb-2" data-value="25">0</div>
              <p className="text-gray-400">% THC</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 rounded-2xl">
              <div className="text-7xl mb-4">🌿</div>
              <div className="stat-number text-6xl font-black text-green-400 mb-2" data-value="60">0</div>
              <p className="text-gray-400">Días de Floración</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/30 rounded-2xl">
              <div className="text-7xl mb-4">🔬</div>
              <div className="stat-number text-6xl font-black text-yellow-400 mb-2" data-value="100">0</div>
              <p className="text-gray-400">% Sativa Dominante</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-lime-500/20 to-transparent border border-lime-500/30 rounded-2xl">
              <div className="text-7xl mb-4">💡</div>
              <div className="stat-number text-6xl font-black text-lime-400 mb-2" data-value="10">0</div>
              <p className="text-gray-400">Nivel de Energía</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Experience */}
      <section className="story-section py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-20 bg-gradient-to-b from-yellow-400 to-lime-500" />
            <h2 className="text-5xl font-black text-yellow-400">
              Capítulo II: La Ascensión
            </h2>
          </div>

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              El primer contacto con Gaslight es como <span className="text-lime-400 font-bold">encender un interruptor</span> en 
              tu mente. No es un golpe pesado que te ancla al sofá. Es una corriente eléctrica 
              que fluye por tus neuronas, despertando conexiones que no sabías que existían.
            </p>

            <p>
              En los primeros <span className="text-yellow-300 font-semibold">5 minutos</span>, sentirás 
              cómo la niebla mental se disipa. Los colores se vuelven más vibrantes. 
              Los sonidos adquieren nuevas texturas. Tu creatividad no solo despierta — 
              <span className="text-lime-400 font-bold">explota</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-lime-500/10 border-2 border-lime-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-lime-400 mb-3">🧠 Efectos Mentales</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Claridad mental cristalina</li>
                  <li>• Creatividad desbordante</li>
                  <li>• Concentración láser</li>
                  <li>• Euforia cerebral</li>
                  <li>• Sociabilidad natural</li>
                </ul>
              </div>

              <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-green-400 mb-3">💪 Efectos Físicos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Energía sostenida</li>
                  <li>• Cuerpo ligero y ágil</li>
                  <li>• Sin sedación</li>
                  <li>• Ideal para actividades</li>
                  <li>• Perfecto para el día</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Flavor Journey */}
      <section className="story-section py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-20 bg-gradient-to-b from-green-400 to-lime-500" />
            <h2 className="text-5xl font-black text-green-400">
              Capítulo III: El Viaje de Sabores
            </h2>
          </div>

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              Gaslight no solo ilumina tu mente — seduce tus sentidos. El primer aroma que detectas es 
              un <span className="text-lime-400 font-bold">cítrico brillante</span>, como si alguien acabara 
              de pelar una lima fresca bajo una luz de neón.
            </p>

            <p>
              Al inhalar, las notas de <span className="text-yellow-300 font-semibold">menta fresca</span> danzan 
              con <span className="text-green-300 font-semibold">pino aromático</span>, creando una sinfonía 
              que despierta todos tus sentidos. Es refrescante, vigorizante, eléctrico.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { emoji: "🍋", name: "Cítrico Lima", intensity: 90 },
                { emoji: "🌿", name: "Menta Fresca", intensity: 85 },
                { emoji: "🌲", name: "Pino Alpino", intensity: 75 }
              ].map((flavor, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-6xl mb-4">{flavor.emoji}</div>
                  <h3 className="text-xl font-bold text-lime-400 mb-3">{flavor.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-lime-400 to-green-500 rounded-full"
                      style={{ width: `${flavor.intensity}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{flavor.intensity}% intensidad</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Science */}
      <section className="story-section py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-20 bg-gradient-to-b from-lime-400 to-yellow-500" />
            <h2 className="text-5xl font-black text-lime-400">
              Capítulo IV: La Alquimia de los Terpenos
            </h2>
          </div>

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              El verdadero secreto de Gaslight reside en su <span className="text-lime-400 font-bold">perfil de terpenos</span> único. 
              Los científicos de LIT FARM lograron algo que pocos han conseguido: un equilibrio perfecto 
              entre energía y claridad.
            </p>

            <div className="space-y-6 my-12">
              {[
                { 
                  name: "Terpinolene", 
                  percentage: 85,
                  effect: "El motor de la creatividad. Este terpeno raro es responsable de esa chispa eléctrica que enciende ideas innovadoras.",
                  color: "from-lime-400 to-green-500"
                },
                { 
                  name: "Limonene", 
                  percentage: 78,
                  effect: "Elevación del estado de ánimo. Te sientes optimista, motivado, listo para conquistar el día.",
                  color: "from-yellow-400 to-lime-400"
                },
                { 
                  name: "Caryophyllene", 
                  percentage: 70,
                  effect: "El toque terrenal que mantiene tus pies en el suelo mientras tu mente vuela.",
                  color: "from-green-400 to-lime-500"
                }
              ].map((terpene, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-2xl border border-lime-500/20">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-lime-400">{terpene.name}</h3>
                    <span className="text-3xl font-black text-yellow-300">{terpene.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
                    <div 
                      className={`h-full bg-gradient-to-r ${terpene.color} rounded-full shadow-lg shadow-lime-500/50`}
                      style={{ width: `${terpene.percentage}%` }}
                    />
                  </div>
                  <p className="text-gray-400 italic">{terpene.effect}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: The Ideal Moment */}
      <section className="story-section py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-20 bg-gradient-to-b from-yellow-400 to-lime-400" />
            <h2 className="text-5xl font-black text-yellow-400">
              Capítulo V: El Momento Perfecto
            </h2>
          </div>

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              Gaslight no es para cualquier momento. Es para <span className="text-lime-400 font-bold">esos momentos</span> cuando 
              necesitas brillar. Cuando tienes un proyecto que terminar, una presentación que dar, 
              una conversación profunda que mantener, o simplemente cuando quieres ver el mundo 
              con ojos más brillantes.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 p-8 rounded-2xl border-2 border-lime-500/30">
                  <div className="text-5xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold text-lime-400 mb-3">Sesiones Creativas</h3>
                  <p className="text-gray-300">
                    Diseño, música, escritura, arte. Gaslight desbloquea ese flujo creativo 
                    donde las ideas fluyen sin esfuerzo.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-lime-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 p-8 rounded-2xl border-2 border-yellow-500/30">
                  <div className="text-5xl mb-4">💼</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">Productividad Diurna</h3>
                  <p className="text-gray-300">
                    Concentración sin nerviosismo. Energía sin ansiedad. 
                    Perfecto para conquistar tu lista de tareas.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 p-8 rounded-2xl border-2 border-green-500/30">
                  <div className="text-5xl mb-4">🗣️</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-3">Social & Conversaciones</h3>
                  <p className="text-gray-300">
                    Gaslight te hace brillante en conversaciones. Las palabras fluyen, 
                    las risas son genuinas, las conexiones profundas.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 p-8 rounded-2xl border-2 border-lime-500/30">
                  <div className="text-5xl mb-4">🏃</div>
                  <h3 className="text-2xl font-bold text-lime-400 mb-3">Actividades Físicas</h3>
                  <p className="text-gray-300">
                    Yoga, senderismo, deportes. La energía limpia de Gaslight 
                    potencia tu conexión mente-cuerpo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-lime-500/20 via-black to-black" />
        <div className="neon-glow absolute inset-0 bg-gradient-to-r from-lime-400/10 to-green-500/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-lime-400 drop-shadow-[0_0_30px_rgba(204,255,0,0.6)]">
            Tu Momento de Iluminación
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            No dejes que la mediocridad apague tu brillo. Gaslight está esperando 
            para encender esa chispa que llevas dentro.
          </p>
          <a
            href="https://cultimed.cl"
            target="_blank"
            className="inline-block px-16 py-6 rounded-2xl text-2xl font-black bg-gradient-to-r from-lime-400 via-green-500 to-yellow-400 text-black hover:scale-110 transition-transform duration-300 shadow-[0_0_50px_rgba(204,255,0,0.5)] hover:shadow-[0_0_80px_rgba(204,255,0,0.8)]"
          >
            ENCIENDE TU LUZ EN CULTIMED
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-lime-500/20 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-3">
            © 2025 CULTIMED Dispensary | LIT FARM
          </p>
          <p className="text-gray-600 text-xs">
            Consumo responsable. Prohibida su venta a menores de edad.
          </p>
        </div>
      </footer>
    </div>
  );
}
