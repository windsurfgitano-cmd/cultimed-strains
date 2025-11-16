
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(ScrollTrigger);
export default function GaslightPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: isMobile ? 40 : 80,
        duration: 1.2,
        ease: "power4.out",
      });
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: isMobile ? 30 : 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });
      gsap.to(".float-particle", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
      gsap.from(".strain-card", {
        scrollTrigger: {
          trigger: ".strain-cards-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: isMobile ? 60 : 100,
        stagger: 0.15,
        duration: 1.2,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, [isMobile]);
  const [refCards, inViewCards] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden relative font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="float-particle absolute w-2 h-2 rounded-full bg-lime-400 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(2px)",
              zIndex: 1,
            }}
          />
        ))}
      </div>
      <motion.section
        ref={heroRef}
        className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6"
        style={{ opacity, scale }}
      >
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-black neon-text-lime mb-3 uppercase tracking-tight drop-shadow-xl">
          GASLIGHT
        </h1>
        <div className="hero-subtitle text-xl md:text-2xl text-yellow-300 mb-2 font-bold tracking-wide">BY LIT FARM</div>
        <div className="hero-subtitle text-base md:text-lg text-gray-200 mb-6 mx-auto max-w-md">
          Ilumina tu experiencia con genética premium.
        </div>
        <motion.a
          className="hero-cta bg-gradient-to-r from-lime-400 to-green-400 px-8 py-4 rounded-xl text-black font-bold shadow-lg uppercase tracking-wide inline-block cursor-pointer"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop at CULTIMED
        </motion.a>
        <div className="mt-10 animate-bounce">
          <svg className="mx-auto w-7 h-7 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </motion.section>
      <section ref={refCards} className="strain-cards-grid py-14 px-4 sm:px-8 max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {[
          { icon: "⚡", title: "25% THC", desc: "Alta Potencia", color: "text-lime-400" },
          { icon: "🌿", title: "<1% CBD", desc: "Sativa Dominante", color: "text-green-300" },
          { icon: "💡", title: "LIT FARM", desc: "Genética Premium", color: "text-yellow-300" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={`strain-card rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 p-6 min-h-[150px] flex flex-col items-center relative shadow-lg ${item.color}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inViewCards ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.13, duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="text-5xl mb-2">{item.icon}</div>
            <div className="font-black text-2xl mb-1">{item.title}</div>
            <div className="text-gray-300 text-sm">{item.desc}</div>
          </motion.div>
        ))}
      </section>
      <footer className="py-12 text-xs text-gray-500 text-center border-t border-white/10 mt-12">
        CULTIMED Dispensary | LIT FARM | Para uso medicinal autorizado. Consumo responsable. Prohibida su venta a menores de edad.
      </footer>
    </div>
  );
}
