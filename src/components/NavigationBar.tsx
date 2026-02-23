import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "À propos", hash: "about" },
  { label: "Compétences", hash: "skills" },
  { label: "Projets", hash: "projects" },
  { label: "Expérience", hash: "experience" },
  { label: "Contact", hash: "contact" },
];

const NavigationBar = () => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const hashFromUrl = location.hash.replace("#", "");
    if (hashFromUrl) {
      setActiveHash(hashFromUrl);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionIds = navItems.map((item) => item.hash);
    const lastSectionId = sectionIds[sectionIds.length - 1];
    const offset = 140;

    const updateActiveSection = () => {
      let currentSection = "";
      const scrollPosition = window.scrollY + offset;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      // Force la section Contact active quand on atteint le bas de page.
      if (lastSectionId && window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        currentSection = lastSectionId;
      }

      setActiveHash((previous) => (previous === currentSection ? previous : currentSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center px-1 py-1 sm:h-14 sm:px-4 sm:py-0">
        <div className="flex-1 sm:overflow-x-auto sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
          <div className="grid w-full grid-cols-5 gap-1 text-[10px] text-muted-foreground sm:flex sm:min-w-max sm:items-center sm:justify-center sm:gap-6 sm:px-2 sm:text-[13px]">
            {navItems.map((item) => {
              const href = `/#${item.hash}`;
              const isActive = location.pathname === "/" && activeHash === item.hash;

              return (
                <Link
                  key={item.hash}
                  to={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-h-10 items-center justify-center rounded-md px-1 py-1 text-center leading-tight break-words transition hover:text-foreground sm:min-h-0 sm:whitespace-nowrap sm:rounded-full sm:px-1 sm:py-1",
                    isActive && "bg-muted/70 text-foreground sm:bg-transparent"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
