import Hero from "./Hero";
import Features from "./Features";
import ParallaxStory from "./ParallaxStory";
import Footer from "./Footer";

/** Landing — Restaurante Lepanto · Hotel Villa Quijotes (Aragón, CDMX). */
const Landing = () => (
  <div className="font-sans">
    <Hero />
    <Features />
    <ParallaxStory />
    <Footer />
  </div>
);

export default Landing;
