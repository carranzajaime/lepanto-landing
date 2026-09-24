import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { parallaxImage, quote } from "./content";

/** Sección full-bleed con parallax de imagen y fade del testimonio. */
const ParallaxStory = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.7, 0.9],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={ref}
      className="relative h-[90vh] min-h-[560px] overflow-hidden bg-background"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
        <img
          src={parallaxImage}
          alt="Mesa servida en Restaurante Lepanto"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />

      <motion.div
        style={{ opacity: textOpacity }}
        className="relative flex h-full items-end px-6 pb-20 md:items-center md:pb-0"
      >
        <p className="max-w-2xl font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">
          {quote}
        </p>
      </motion.div>
    </section>
  );
};

export default ParallaxStory;
