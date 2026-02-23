
import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { ArrowDown, GraduationCap } from "lucide-react";
import HolbertonLogo from "@/img/Holberton.png";
import OvhLogo from "@/img/ovh.png";
import WeFixLogo from "@/img/WeFix-1.png";
import WorldlineLogo from "@/img/Worldline.png";

const experiences = [
  {
    company: "WeFix - FNAC Darty",
    role: "Responsable développement commercial",
    period: "2019 - 2022",
    logo: WeFixLogo,
  },
  {
    company: "OVHcloud",
    role: "Customer Service Representative",
    period: "2022 - 2024",
    logo: OvhLogo,
  },
  {
    company: "Holberton School Lille",
    role: "Concepteur développeur d'applications",
    note: "Reconversion pro RNCP 6",
    period: "Oct 2024",
    logo: HolbertonLogo,
  },
  {
    company: "Worldline",
    role: "Ingénieur d'étude et développement",
    period: "En cours",
    logo: WorldlineLogo,
  },
];

const ExperienceSection = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-muted/30 px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef}>
          <SectionTitle
            className={[
              "will-change-transform will-change-opacity",
              "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:filter-none",
              titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm",
            ].join(" ")}
          >
            Formation & expérience
          </SectionTitle>
        </div>
        <div className="relative mt-10 pb-12 sm:mt-12 md:pb-0" ref={timelineRef}>
          <div
            className={[
              "pointer-events-none absolute left-0 right-0 top-24 hidden h-px bg-border lg:top-32 lg:block",
              "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none",
              timelineVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-90",
            ].join(" ")}
            aria-hidden="true"
          />
          <div
            className={[
              "pointer-events-none absolute bottom-0 right-5 top-5 w-0 md:hidden",
              "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-reduce:transition-none motion-reduce:transform-none",
              timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            ].join(" ")}
            aria-hidden="true"
          >
            <span
              className={[
                "absolute bottom-4 left-0 h-[calc(100%-1rem)] w-[0.5px] -translate-x-1/2 bg-gradient-to-b from-muted-foreground/20 via-muted-foreground/55 to-muted-foreground/45",
                "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "motion-reduce:transition-none motion-reduce:transform-none",
                timelineVisible ? "origin-top opacity-100 scale-y-100" : "origin-top opacity-0 scale-y-95",
              ].join(" ")}
            />
            <span className="absolute bottom-3 left-0 h-2 w-[0.5px] -translate-x-1/2 bg-muted-foreground/55" />
            <ArrowDown
              className="absolute bottom-0 left-0 h-4 w-4 -translate-x-1/2 text-muted-foreground/55"
              strokeWidth={1.6}
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className={[
                  "relative flex w-full flex-col items-center pr-12 text-center md:pr-0",
                  "will-change-transform will-change-opacity",
                  "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:filter-none",
                  timelineVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm",
                ].join(" ")}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span
                  className="absolute right-5 top-4 z-10 inline-flex h-2.5 w-2.5 translate-x-1/2 rounded-full border border-background/80 bg-primary/45 shadow-sm md:hidden"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex w-full items-center justify-center md:w-auto">
                  <img
                    src={experience.logo}
                    alt={`Logo ${experience.company}`}
                    className="h-12 w-28 object-contain sm:h-14 sm:w-32 md:h-24 md:w-40 lg:h-28 lg:w-48"
                    loading="lazy"
                  />
                </div>
                <span
                  className="absolute top-20 left-1/2 hidden h-10 w-px -translate-x-1/2 bg-border lg:top-28 lg:block"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-24 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary/45 shadow-sm lg:top-32 lg:block"
                  aria-hidden="true"
                />
                <div className="mt-3 w-full text-center md:mt-6 lg:mt-10">
                  <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg lg:text-xl">
                    {experience.role}
                  </h3>
                  {experience.note && (
                    <div className="mt-2 flex flex-col items-center gap-1 text-[10px] tracking-[0.08em] text-muted-foreground sm:text-[11px]">
                      <span className="flex items-center justify-center gap-2 text-center whitespace-normal">
                        {experience.note}
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  )}
                  <span className="mt-2 block text-xs tracking-[0.08em] text-muted-foreground md:tracking-[0.12em]">
                    {experience.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
