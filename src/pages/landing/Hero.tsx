import { motion } from "framer-motion";
import { easeSilk } from "./motion";
import { heroIntro, heroKicker, heroWords, phoneHref, ratingLabel } from "./content";

const Hero = () => (
  <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
    <div className="pointer-events-none absolute inset-0 bg-hero-halo" />

    <motion.p
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: easeSilk }}
      className="mb-6 font-sans text-sm tracking-wide text-accent/80"
    >
      {heroKicker}
    </motion.p>

    <h1 className="max-w-4xl font-display text-[13vw] font-medium leading-[0.98] text-foreground sm:text-6xl md:text-7xl">
      {heroWords.map((word, i) => (
        <motion.span
          key={word + i}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15 + i * 0.09, ease: easeSilk }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9, ease: easeSilk }}
      className="mt-8 max-w-lg font-sans text-lg font-light leading-relaxed text-foreground/70"
    >
      {heroIntro}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.15, ease: easeSilk }}
      className="mt-12 flex flex-wrap items-center justify-center gap-4"
    >
      <a
        href={phoneHref}
        className="rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
      >
        Reservar por teléfono
      </a>
      <a
        href="#carta"
        className="rounded-full border border-foreground/20 px-8 py-3.5 font-sans text-sm font-medium text-foreground/85 backdrop-blur-sm transition-colors duration-300 hover:border-foreground/45"
      >
        Ver la carta
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="absolute bottom-10 flex flex-col items-center gap-2 text-foreground/40"
    >
      <span className="font-sans text-xs tracking-wide">{ratingLabel}</span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="h-6 w-px bg-foreground/30"
      />
    </motion.div>
  </section>
);

export default Hero;
