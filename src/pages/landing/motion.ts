import type { Variants } from "framer-motion";

/**
 * Animaciones compartidas de la landing de Lepanto.
 * `easeSilk` se tipa como tupla porque framer-motion exige una cubic-bezier
 * de exactamente cuatro números.
 */
export const easeSilk: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: easeSilk },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: easeSilk },
  },
};
