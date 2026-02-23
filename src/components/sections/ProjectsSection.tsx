
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Code2, Headset, Search } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import SchoolLogo from "@/img/logohol.png";
import WorkLogo from "@/img/wl.png";
import FreelanceLogo from "@/img/freelance.png";

const ProjectsSection = () => {
  const schoolProjects = projects.filter((project) => project.category === "school");
  const freelanceProjects = projects.filter((project) => project.category === "freelance");
  const schoolScrollRef = useRef<HTMLDivElement | null>(null);
  const novaTasksRef = useRef<HTMLDivElement | null>(null);
  const [isSchoolScrollable, setIsSchoolScrollable] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [areNovaTasksVisible, setAreNovaTasksVisible] = useState(false);

  useEffect(() => {
    const container = schoolScrollRef.current;
    if (!container) {
      return;
    }

    const updateScrollState = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container;
      const hasHorizontalOverflow = scrollWidth > clientWidth + 1;
      setIsSchoolScrollable(hasHorizontalOverflow);
      setCanScrollLeft(hasHorizontalOverflow && scrollLeft > 0);
      setCanScrollRight(hasHorizontalOverflow && scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [schoolProjects.length]);

  useEffect(() => {
    const node = novaTasksRef.current;
    if (!node) {
      return;
    }

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAreNovaTasksVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreNovaTasksVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollByAmount = (amount: number) => {
    schoolScrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Mes projets</SectionTitle>
        <div className="mt-12 space-y-12">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <img src={SchoolLogo} alt="Logo école" className="h-8 w-8 object-contain" />
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Projets Holberton School</h3>
              </div>
              <span className="self-start text-sm text-muted-foreground sm:self-auto">
                {schoolProjects.length} projets
              </span>
            </div>
            <div className="relative mt-6">
              <div
                ref={schoolScrollRef}
                className={`flex items-stretch gap-4 overflow-x-auto overflow-y-visible px-1 pb-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-6 ${
                  isSchoolScrollable ? "justify-start pr-4 sm:pr-6" : "justify-center"
                }`}
              >
                {schoolProjects.map((project) => (
                  <div
                    key={project.title}
                    className="w-[82vw] min-w-[82vw] max-w-[320px] flex-none self-stretch sm:w-[320px] sm:min-w-[320px]"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              {isSchoolScrollable && (
                <>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    onClick={() => scrollByAmount(-360)}
                    aria-label="Défiler les projets école vers la gauche"
                    className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-sm transition duration-150 hover:-translate-y-[calc(50%+2px)] hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 md:flex"
                    disabled={!canScrollLeft}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollByAmount(360)}
                    aria-label="Défiler les projets école vers la droite"
                    className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-sm transition duration-150 hover:-translate-y-[calc(50%+2px)] hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 md:flex"
                    disabled={!canScrollRight}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <img src={WorkLogo} alt="Logo entreprise" className="h-8 w-8 object-contain" />
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Projets Nova</h3>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-left text-sm leading-relaxed text-foreground sm:text-base lg:text-lg">
                <p className="mb-4">
                  WL Nova est une application web utilisée dans le secteur médico-social public (PMI, santé scolaire, santé au travail). Elle centralise les informations dans un dossier unique sécurisé afin d’améliorer la continuité de suivi et la coordination entre professionnels.
                </p>
                <p className="mb-2 font-semibold">
                  Ce que la solution apporte
                </p>
                <ul className="mb-4 list-disc space-y-1 pl-5 sm:pl-6">
                  <li>Centralisation et accès maîtrisé aux données usagers</li>
                  <li>Workflows plus fluides (dossier, planification, documents, historiques)</li>
                  <li>Reporting opérationnel via tableaux de bord et indicateurs d’activité</li>
                </ul>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">PHP</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">MySQL</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">Git</span>
                </div>
                <p className="mt-4 font-semibold">
                  Mes tâches sur le projet :
                </p>
                <div
                  ref={novaTasksRef}
                  className="mx-auto mt-5 flex w-full max-w-[980px] flex-nowrap justify-start gap-4 overflow-x-auto px-1 pb-2 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mt-7 sm:justify-center sm:gap-5"
                >
                  <div
                    className={`group relative flex h-[220px] w-[78vw] max-w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-[transform,opacity,box-shadow] duration-700 ease-out hover:shadow-md will-change-transform will-change-opacity motion-reduce:transition-none motion-reduce:transform-none sm:h-[230px] sm:w-[220px] ${
                      areNovaTasksVisible ? "opacity-100 translate-y-0 scale-100 delay-0" : "opacity-0 translate-y-6 scale-[0.98] delay-0"
                    }`}
                  >
                    <p className="text-center text-sm font-semibold tracking-tight text-foreground sm:text-base">Développer des fonctionnalités</p>
                    <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                      endpoints, règles métier, améliorations ciblées
                    </p>
                    <div className="mt-auto flex justify-center pt-4">
                      <div className="inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]">
                        <Code2 className="h-10 w-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`group relative flex h-[220px] w-[78vw] max-w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-[transform,opacity,box-shadow] duration-700 ease-out hover:shadow-md will-change-transform will-change-opacity motion-reduce:transition-none motion-reduce:transform-none sm:h-[230px] sm:w-[220px] ${
                      areNovaTasksVisible ? "opacity-100 translate-y-0 scale-100 delay-100" : "opacity-0 translate-y-6 scale-[0.98] delay-0"
                    }`}
                  >
                    <p className="text-center text-sm font-semibold tracking-tight text-foreground sm:text-base">Assurer la qualité</p>
                    <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                      tests, non-régression, fiabilisation de traitements
                    </p>
                    <div className="mt-auto flex justify-center pt-4">
                      <div className="inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`group relative flex h-[220px] w-[78vw] max-w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-[transform,opacity,box-shadow] duration-700 ease-out hover:shadow-md will-change-transform will-change-opacity motion-reduce:transition-none motion-reduce:transform-none sm:h-[230px] sm:w-[220px] ${
                      areNovaTasksVisible ? "opacity-100 translate-y-0 scale-100 delay-200" : "opacity-0 translate-y-6 scale-[0.98] delay-0"
                    }`}
                  >
                    <p className="text-center text-sm font-semibold tracking-tight text-foreground sm:text-base">Corriger & supporter</p>
                    <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                      analyse d’incidents, debug, correctifs, suivi
                    </p>
                    <div className="mt-auto flex justify-center pt-4">
                      <div className="inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]">
                        <Headset className="h-10 w-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`group relative flex h-[220px] w-[78vw] max-w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-[transform,opacity,box-shadow] duration-700 ease-out hover:shadow-md will-change-transform will-change-opacity motion-reduce:transition-none motion-reduce:transform-none sm:h-[230px] sm:w-[220px] ${
                      areNovaTasksVisible ? "opacity-100 translate-y-0 scale-100 delay-300" : "opacity-0 translate-y-6 scale-[0.98] delay-0"
                    }`}
                  >
                    <p className="text-center text-sm font-semibold tracking-tight text-foreground sm:text-base">Analyser & cadrer</p>
                    <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                      compréhension du besoin, découpage en tâches, documentation
                    </p>
                    <div className="mt-auto flex justify-center pt-4">
                      <div className="inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]">
                        <Search className="h-10 w-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <img src={FreelanceLogo} alt="Logo freelance" className="h-8 w-8 object-contain" />
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Projets freelance</h3>
              </div>
              <span className="self-start text-sm text-muted-foreground sm:self-auto">
                {freelanceProjects.length} projets
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {freelanceProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
