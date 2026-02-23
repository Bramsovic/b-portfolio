
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import HolbertonLogo from "@/img/Holberton.png";
import IbmLogo from "@/img/ibm.png";
import WorldlineLogo from "@/img/Worldline.png";

const quickLinks = [
  { label: "À propos", hash: "about" },
  { label: "Compétences", hash: "skills" },
  { label: "Projets", hash: "projects" },
  { label: "Expérience", hash: "experience" },
  { label: "Contact", hash: "contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brhcam", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Bramsovic", icon: Github },
  { label: "contact@bhdd.fr", href: "mailto:contact@bhdd.fr", icon: Mail },
];

const orgLogos = [
  { name: "Worldline", src: WorldlineLogo },
  { name: "Holberton School", src: HolbertonLogo },
  { name: "IBM", src: IbmLogo },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/70 bg-gradient-to-b from-background to-muted/30 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="col-span-2 space-y-3 md:col-span-1">
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {orgLogos.map((org) => (
                <img
                  key={org.name}
                  src={org.src}
                  alt={`Logo ${org.name}`}
                  title={org.name}
                  className={`w-auto object-contain opacity-75 grayscale ${
                    org.name === "IBM" ? "h-5 sm:h-6" : "h-4 sm:h-5"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.hash}>
                  <Link
                    to={`/#${item.hash}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Coordonnées</h4>
            <ul className="space-y-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 align-middle text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span className={item.label.includes("@") ? "break-all" : undefined}>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {year} Brahim H. Tous droits réservés.
          </p>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground">Conçu avec React, TypeScript et Tailwind CSS</p>
            <button
              type="button"
              onClick={handleScrollTop}
              className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-muted-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Haut de page
              <ArrowUp className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
