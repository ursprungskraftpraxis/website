import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";
import { heroContent } from "@/data/hero";
import "@/sections/styles/hero.css";

function Hero() {
  const location = useLocation();
  const language = location.pathname.startsWith("/de") ? "de" : "en";
  const content = heroContent[language];

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero__content"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: "easeOut",
        }}
      >
        <h1 className="hero__title">{content.title}</h1>

        <p className="hero__subtitle">{content.subtitle}</p>

        <p className="hero__specialties">{content.specialties}</p>

        <a className="hero__cta" href="#contact">
          {content.cta}
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
