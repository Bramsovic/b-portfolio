
import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-white px-4 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>About me</SectionTitle>
        <div className="space-y-6 text-base leading-relaxed text-gray-700 sm:text-lg sm:text-justify">
          <p
            className={[
              "will-change-transform will-change-opacity",
              "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:filter-none",
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm",
            ].join(" ")}
          >
            Ingénieur d’étude et développement chez Worldline, je conçois et
            développe des fonctionnalités web de bout en bout : interface, logique métier, API
            et intégration. J’accorde beaucoup d’importance à la qualité du code (lisibilité,
            performance, maintenabilité) et à une expérience utilisateur simple et efficace.
          </p>
          <p
            className={[
              "will-change-transform will-change-opacity delay-150",
              "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:filter-none",
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm",
            ].join(" ")}
          >
            En parallèle, je construis des projets personnels et freelances pour monter en
            compétences en continu : exploration de nouvelles technos, approfondissement des
            bonnes pratiques, et livraison de solutions concrètes. Mon objectif : apporter de la
            valeur rapidement, apprendre vite, et construire des produits solides dans la durée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
