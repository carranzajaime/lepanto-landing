import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { cardVariant, staggerParent } from "./motion";
import { features } from "./content";

const Features = () => (
  <section id="carta" className="bg-background px-6 py-32 md:py-40">
    <div className="mx-auto max-w-5xl">
      <Reveal className="mb-16 max-w-xl">
        <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
          Tres razones para quedarse a comer.
        </h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerParent}
        className="grid gap-5 md:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariant}
            className="rounded-3xl border border-foreground/10 bg-foreground/[0.04] p-8 backdrop-blur-md transition-colors duration-500 hover:bg-foreground/[0.07]"
          >
            <h3 className="font-display text-xl font-medium text-foreground">
              {feature.title}
            </h3>
            <p className="mt-4 font-sans text-[15px] font-light leading-relaxed text-foreground/65">
              {feature.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Features;
