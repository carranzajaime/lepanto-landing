import Reveal from "./Reveal";
import { footer } from "./content";

const Footer = () => (
  <footer className="bg-background px-6 pb-14 pt-28">
    <div className="mx-auto max-w-5xl">
      <Reveal className="grid gap-10 border-t border-foreground/10 pt-14 md:grid-cols-3">
        <div>
          <h4 className="font-display text-2xl text-foreground">Lepanto</h4>
          <p className="mt-3 font-sans text-sm font-light leading-relaxed text-foreground/55">
            {footer.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h5 className="font-sans text-xs tracking-wide text-foreground/40">
            Horario
          </h5>
          <p className="mt-3 font-sans text-sm font-light text-foreground/70">
            {footer.hours.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h5 className="font-sans text-xs tracking-wide text-foreground/40">
            Contacto
          </h5>
          <p className="mt-3 font-sans text-sm font-light text-foreground/70">
            {footer.contact.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </Reveal>

      <p className="mt-16 font-sans text-xs text-foreground/30">
        Restaurante Lepanto — Hotel Villa Quijotes
      </p>
    </div>
  </footer>
);

export default Footer;
