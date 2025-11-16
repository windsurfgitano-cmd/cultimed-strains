
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function GaslightPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // Smooth scroll
        gsap.config({ force3D: true });

        // Hero animations with stagger
        const tl = gsap.timeline();
        tl.from(".hero-title", {
          opacity: 0,
          y: 150,
          duration: 1.8,
          ease: "power4.out"
        })
        .from(".hero-subtitle", {
          opacity: 0,
          y: 60,
          duration: 1.2,
          stagger: 0.2
        }, "-=1")
        .from(".hero-cta", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "elastic.out(1, 0.5)"
        }, "-=0.5");

        // Parallax hero background
        gsap.to(".hero-bg-image", {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5
          },
          y: 300,
          scale: 1.2
        });

        // Neon pulse
        gsap.to(".neon-glow", {
          opacity: 0.4,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Story sections with reveal
        gsap.utils.toArray(".story-section").forEach((section: any, index) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out"
          });
        });

        // Parallax images in sections
        gsap.utils.toArray(".parallax-image").forEach((img: any) => {
          gsap.to(img, {
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 2
            },
            y: -80
          });
        });

        // Stats with counter animation
        gsap.utils.toArray(".stat-number").forEach((stat: any) => {
          gsap.to(stat, {
            scrollTrigger: {
              trigger: stat,
              start: "top 80%"
            },
            innerText: stat.dataset.value,
            duration: 2.5,
            snap: { innerText: 1 },
            ease: "power2.out"
          });
        });

        // Cards hover scale
        gsap.utils.toArray(".hover-card").forEach((card: any) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });

        // Progress bar
        gsap.to(".progress-bar", {
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3
          },
          width: "100%"
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div className="progress-bar h-full bg-gradient-to-r from-lime-400 via-green-500 to-yellow-400 w-0" />
      </div>

      <Link href="/" className="fixed top-6 left-6 z-50 px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-md transition-all border border-white/10 hover:border-lime-400/50 group">
        <span className="group-hover:-translate-x-1 inline-block transition-transform">←</span> Volver
      </Link>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div 
          className="hero-bg-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        <div className="neon-glow absolute inset-0 bg-gradient-radial from-lime-500/30 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="hero-title mb-8">
            <h1 className="text-8xl md:text-[12rem] font-black text-lime-400 drop-shadow-[0_0_40px_rgba(204,255,0,1)] leading-none">
              GASLIGHT
            </h1>
            <div className="h-1 w-64 mx-auto mt-6 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
          </div>

          <p className="hero-subtitle text-4xl md:text-5xl mb-6 text-yellow-300 font-black tracking-wide">
            BY LIT FARM
          </p>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            En las profundidades del laboratorio de LIT FARM, donde la ciencia se encuentra con el arte, 
            nació una cepa destinada a <span className="text-lime-400 font-bold">iluminar</span> las mentes más brillantes...
          </p>

          <button className="hero-cta group relative px-14 py-6 bg-gradient-to-r from-lime-400 via-green-500 to-yellow-400 text-black font-black text-xl rounded-2xl overflow-hidden">
            <span className="relative z-10 group-hover:scale-110 inline-block transition-transform">
              DESCUBRE TU LUZ
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-lime-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-lime-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Chapter 1: Origin Story */}
      <section className="story-section py-40 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(lime_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(204,255,0,0.8)]" />
              <div className="w-0.5 h-32 bg-gradient-to-b from-lime-400 to-transparent" />
            </div>
            <div>
              <span className="text-sm text-lime-400/60 font-mono mb-2 block">CAPÍTULO I</span>
              <h2 className="text-6xl md:text-7xl font-black text-lime-400 leading-tight">
                El Nacimiento<br/>de la Luz
              </h2>
            </div>
          </div>

          <div className="space-y-8 text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-lime-400 first-letter:mr-3 first-letter:float-left">
              Todo comenzó con una visión audaz. Los maestros cultivadores de LIT FARM no querían crear 
              otra cepa más del montón. Buscaban algo revolucionario: la cepa perfecta que pudiera 
              <span className="text-lime-400 font-bold"> encender la creatividad</span> sin apagar la claridad mental.
            </p>

            <p className="pl-8 border-l-4 border-lime-400/30">
              En sus manos, las genéticas más puras de <span className="text-yellow-300 font-semibold">Zkittlez</span> se 
              encontraron con el legendario <span className="text-yellow-300 font-semibold">OG</span>. 
              La alquimia que siguió fue nada menos que mágica.
            </p>

            <div className="my-16 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-lime-500/20 to-green-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border-2 border-lime-400/30">
                <p className="text-lime-300 italic text-3xl md:text-4xl font-light leading-relaxed">
                  "Las plantas comenzaron a brillar con un tono verde lima eléctrico, 
                  como si la energía misma fluyera a través de sus tricomas. No estábamos 
                  cultivando cannabis. Estábamos cultivando <span className="text-lime-400 font-bold">iluminación</span>."
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-lime-400 to-transparent" />
                  <p className="text-gray-400 text-base font-mono">Maestro Cultivador, LIT FARM</p>
                </div>
              </div>
            </div>

            <p>
              Cada planta se convirtió en un faro de potencial. Los cultivadores observaban, fascinados, 
              cómo los tricomas se desarrollaban densos y brillantes, prometiendo una experiencia 
              que trascendería lo ordinario.
            </p>
          </div>
        </div>
      </section>

      {/* Trichomes Visual Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="parallax-image relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-lime-400/30 to-green-500/30 rounded-full blur-3xl" />
              <img 
                src="https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/1ab35550a9147674282946968f7379c3"
                alt="Trichomes Macro"
                className="relative rounded-3xl shadow-2xl shadow-lime-500/20 border border-lime-400/20"
              />
            </div>
            <div>
              <h3 className="text-5xl font-black text-lime-400 mb-8">
                Cristales de<br/>Pura Potencia
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Cada tricoma es una fábrica microscópica de cannabinoides y terpenos. 
                Bajo el microscopio, Gaslight revela un bosque cristalino de estructuras 
                perfectamente formadas, cada una brillando con promesa.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Esta densidad de tricomas no es accidental. Es el resultado de generaciones 
                de selección cuidadosa, buscando la concentración perfecta de 
                <span className="text-lime-400 font-bold"> 25% THC</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
            Los Números Hablan
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "⚡", value: "25", unit: "% THC", label: "Potencia Premium", color: "lime" },
              { icon: "🌿", value: "60", unit: "DÍAS", label: "Floración Rápida", color: "green" },
              { icon: "🔬", value: "100", unit: "%", label: "Sativa Dominante", color: "yellow" },
              { icon: "💡", value: "10", unit: "/10", label: "Nivel Energético", color: "lime" }
            ].map((stat, idx) => (
              <div key={idx} className="hover-card group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-gray-900 p-10 rounded-3xl border-2 border-white/5 group-hover:border-lime-400/50 transition-all">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className={`stat-number text-6xl font-black text-${stat.color}-400`} data-value={stat.value}>0</span>
                    <span className="text-2xl text-gray-400 pb-2">{stat.unit}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 2: The Experience */}
      <section className="story-section py-40 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(255,235,59,0.8)]" />
              <div className="w-0.5 h-32 bg-gradient-to-b from-yellow-400 to-transparent" />
            </div>
            <div>
              <span className="text-sm text-yellow-400/60 font-mono mb-2 block">CAPÍTULO II</span>
              <h2 className="text-6xl md:text-7xl font-black text-yellow-400 leading-tight">
                La Ascensión<br/>Mental
              </h2>
            </div>
          </div>

          <div className="space-y-8 text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p>
              El primer contacto con Gaslight es como <span className="text-lime-400 font-bold text-3xl">encender 
              un interruptor</span> en tu mente. No hay golpe pesado que te ancle al sofá. 
              En su lugar, una corriente eléctrica fluye por tus neuronas, despertando conexiones 
              que no sabías que existían.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-16">
              {[
                { time: "0-5", emoji: "🚀", title: "Despegue", desc: "La niebla se disipa. Todo se vuelve más nítido." },
                { time: "5-15", emoji: "💡", title: "Iluminación", desc: "Las ideas empiezan a fluir. Creatividad desbordante." },
                { time: "15-60", emoji: "⚡", title: "Energía", desc: "Concentración láser. Productividad sin ansiedad." }
              ].map((phase, idx) => (
                <div key={idx} className="hover-card group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-lime-400/20 hover:border-lime-400/50 transition-all">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{phase.emoji}</div>
                  <div className="text-sm text-lime-400 font-mono mb-2">{phase.time} MIN</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400 text-base">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-16">
              <div className="hover-card bg-lime-500/5 border-2 border-lime-500/20 hover:border-lime-500/50 p-10 rounded-3xl transition-all">
                <h3 className="text-3xl font-black text-lime-400 mb-6 flex items-center gap-3">
                  <span className="text-4xl">🧠</span> Efectos Mentales
                </h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  {["Claridad mental cristalina", "Creatividad explosiva", "Concentración láser", "Euforia cerebral", "Sociabilidad natural", "Pensamiento lateral"].map((effect, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-lime-400 text-xl">▸</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hover-card bg-green-500/5 border-2 border-green-500/20 hover:border-green-500/50 p-10 rounded-3xl transition-all">
                <h3 className="text-3xl font-black text-green-400 mb-6 flex items-center gap-3">
                  <span className="text-4xl">💪</span> Efectos Físicos
                </h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  {["Energía sostenida y limpia", "Cuerpo ligero y ágil", "Cero sedación", "Perfecto para actividades", "Ideal para uso diurno", "Sin couch-lock"].map((effect, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">▸</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terpene Science Section */}
      <section className="story-section py-40 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/878c2c578e0c987fce4929659c708cb2" 
            alt="Terpenes" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-start gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_20px_rgba(204,255,0,0.8)]" />
              <div className="w-0.5 h-32 bg-gradient-to-b from-lime-400 to-transparent" />
            </div>
            <div>
              <span className="text-sm text-lime-400/60 font-mono mb-2 block">CAPÍTULO III</span>
              <h2 className="text-6xl md:text-7xl font-black text-lime-400 leading-tight">
                La Alquimia<br/>de los Terpenos
              </h2>
            </div>
          </div>

          <p className="text-2xl text-gray-200 leading-relaxed mb-16">
            El verdadero secreto de Gaslight reside en su perfil de terpenos único. 
            Los científicos de LIT FARM lograron un equilibrio perfecto entre 
            <span className="text-lime-400 font-bold"> energía y claridad</span>.
          </p>

          <div className="space-y-8">
            {[
              {
                name: "Terpinolene",
                percentage: 85,
                color: "lime",
                icon: "⚡",
                effect: "El motor de la creatividad. Este terpeno raro es responsable de esa chispa eléctrica que enciende ideas innovadoras y pensamiento lateral."
              },
              {
                name: "Limonene",
                percentage: 78,
                color: "yellow",
                icon: "🍋",
                effect: "Elevación del estado de ánimo. Te sientes optimista, motivado, listo para conquistar el día con una sonrisa genuina."
              },
              {
                name: "Caryophyllene",
                percentage: 70,
                color: "green",
                icon: "🌿",
                effect: "El toque terrenal que mantiene tus pies en el suelo mientras tu mente vuela. Balance y enfoque sin perder la euforia."
              }
            ].map((terpene, idx) => (
              <div key={idx} className="hover-card group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-${terpene.color}-400 to-${terpene.color}-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-lime-500/20 group-hover:border-lime-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{terpene.icon}</span>
                      <div>
                        <h3 className={`text-3xl font-black text-${terpene.color}-400`}>{terpene.name}</h3>
                        <p className="text-sm text-gray-500 font-mono">C₁₀H₁₆</p>
                      </div>
                    </div>
                    <span className={`text-5xl font-black text-${terpene.color}-300`}>{terpene.percentage}%</span>
                  </div>

                  <div className="w-full bg-gray-800 rounded-full h-3 mb-6 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${terpene.color}-400 to-${terpene.color}-600 rounded-full shadow-lg`}
                      style={{ width: `${terpene.percentage}%` }}
                    />
                  </div>

                  <p className="text-gray-300 italic leading-relaxed">{terpene.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Moments Section */}
      <section className="story-section py-40 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/39f3a854436fa34de190a0012c1dac30" 
            alt="Creative Workspace" 
            className="parallax-image w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm text-yellow-400/60 font-mono mb-4 block">CAPÍTULO IV</span>
            <h2 className="text-6xl md:text-7xl font-black text-yellow-400 mb-6">
              El Momento Perfecto
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Gaslight no es para cualquier momento. Es para <span className="text-lime-400 font-bold">esos momentos</span> cuando necesitas brillar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🎨", title: "Sesiones Creativas", desc: "Diseño, música, escritura, arte. Gaslight desbloquea ese flujo creativo donde las ideas fluyen sin esfuerzo y cada decisión creativa se siente acertada.", gradient: "from-lime-400 to-green-500" },
              { icon: "💼", title: "Productividad Diurna", desc: "Concentración sin nerviosismo. Energía sin ansiedad. Perfecto para conquistar tu lista de tareas con claridad mental y motivación genuina.", gradient: "from-yellow-400 to-lime-400" },
              { icon: "🗣️", title: "Social & Conversaciones", desc: "Gaslight te hace brillante en conversaciones. Las palabras fluyen con facilidad, las risas son genuinas, las conexiones se profundizan naturalmente.", gradient: "from-green-400 to-lime-500" },
              { icon: "🏃", title: "Actividades Físicas", desc: "Yoga, senderismo, deportes, ejercicio. La energía limpia de Gaslight potencia tu conexión mente-cuerpo y hace que el movimiento sea puro disfrute.", gradient: "from-lime-400 to-yellow-400" }
            ].map((moment, idx) => (
              <div key={idx} className="hover-card group relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${moment.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-gray-900 p-10 rounded-3xl border-2 border-white/5 group-hover:border-lime-400/50 transition-all">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">{moment.icon}</div>
                  <h3 className="text-3xl font-black text-lime-400 mb-4">{moment.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{moment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-lime-500/20 via-black to-black" />
        <div className="neon-glow absolute inset-0 bg-gradient-to-r from-lime-400/10 to-green-500/10" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-7xl md:text-8xl font-black mb-10 text-lime-400 drop-shadow-[0_0_40px_rgba(204,255,0,0.7)]">
            Tu Momento de<br/>Iluminación Espera
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 mb-16 leading-relaxed max-w-3xl mx-auto">
            No dejes que la mediocridad apague tu brillo. Gaslight está esperando 
            para encender esa <span className="text-yellow-400 font-bold">chispa</span> que llevas dentro.
          </p>

          <a
            href="https://cultimed.cl"
            target="_blank"
            className="group inline-block relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-lime-400 via-green-500 to-yellow-400 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 animate-pulse" />
            <div className="relative px-20 py-8 bg-gradient-to-r from-lime-400 via-green-500 to-yellow-400 text-black font-black text-3xl rounded-3xl group-hover:scale-105 transition-transform duration-300">
              ENCIENDE TU LUZ EN CULTIMED
            </div>
          </a>

          <p className="mt-12 text-gray-500 text-sm">
            Disponible ahora en CULTIMED Dispensary • 25% THC • LIT FARM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-lime-500/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-3">
            © 2025 CULTIMED Dispensary | LIT FARM | Genética Premium
          </p>
          <p className="text-gray-600 text-xs">
            Consumo responsable. Solo para mayores de edad. Prohibida su venta a menores.
          </p>
        </div>
      </footer>
    </div>
  );
}
