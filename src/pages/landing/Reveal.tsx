import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp } from "./motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
};

/** Envoltorio que revela su contenido una sola vez al entrar en viewport. */
const Reveal = ({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
}: RevealProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={variants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;
