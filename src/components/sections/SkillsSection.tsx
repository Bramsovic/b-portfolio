
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "@/components/SectionTitle";
import { frontEndSkills, backEndSkills, databaseSkills, toolsSkills } from "@/data/skills";

const tabs = ["frontend", "backend", "database", "tools"] as const;
type TabKey = (typeof tabs)[number];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState(() => ({
    frontend: frontEndSkills.map(() => 0),
    backend: backEndSkills.map(() => 0),
    database: databaseSkills.map(() => 0),
    tools: toolsSkills.map(() => 0),
  }));

  const targets = useMemo(
    () => ({
      frontend: frontEndSkills.map((skill) => skill.level),
      backend: backEndSkills.map((skill) => skill.level),
      database: databaseSkills.map((skill) => skill.level),
      tools: toolsSkills.map((skill) => skill.level),
    }),
    []
  );

  const animateTab = useCallback(
    (tab: TabKey) => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }

      const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setAnimatedLevels((prev) => ({
          ...prev,
          [tab]: targets[tab],
        }));
        return;
      }

      setAnimatedLevels((prev) => ({
        ...prev,
        [tab]: targets[tab].map(() => 0),
      }));

      const duration = 1200;
      const start = window.performance.now();
      const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = easeOutCubic(progress);

        setAnimatedLevels((prev) => ({
          ...prev,
          [tab]: targets[tab].map((level) => Math.round(level * eased)),
        }));

        if (progress < 1) {
          rafRef.current = window.requestAnimationFrame(tick);
        }
      };

      rafRef.current = window.requestAnimationFrame(tick);
    },
    [targets]
  );

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    animateTab(activeTab);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [activeTab, animateTab, hasAnimated]);

  return (
    <section id="skills" ref={sectionRef} className="bg-muted/30 px-4 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabKey)} className="w-full">
          <TabsList className="mb-6 grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 sm:mb-8 sm:grid-cols-4">
            <TabsTrigger
              value="frontend"
              className="min-h-11 whitespace-normal px-2 py-2 text-center text-xs leading-tight sm:min-h-10 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              Front-end
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="min-h-11 whitespace-normal px-2 py-2 text-center text-xs leading-tight sm:min-h-10 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              Back-end
            </TabsTrigger>
            <TabsTrigger
              value="database"
              className="min-h-11 whitespace-normal px-2 py-2 text-center text-xs leading-tight sm:min-h-10 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              Base de données
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="min-h-11 whitespace-normal px-2 py-2 text-center text-xs leading-tight sm:min-h-10 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              Outils & DevOps
            </TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="space-y-4 sm:space-y-6">
            {frontEndSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <Label className="min-w-0 leading-snug">{skill.name}</Label>
                  <span className="tabular-nums w-12 text-right text-sm text-muted-foreground">
                    {animatedLevels.frontend[index]}%
                  </span>
                </div>
                <Progress value={animatedLevels.frontend[index]} className="h-2" />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="backend" className="space-y-4 sm:space-y-6">
            {backEndSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <Label className="min-w-0 leading-snug">{skill.name}</Label>
                  <span className="tabular-nums w-12 text-right text-sm text-muted-foreground">
                    {animatedLevels.backend[index]}%
                  </span>
                </div>
                <Progress value={animatedLevels.backend[index]} className="h-2" />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="database" className="space-y-4 sm:space-y-6">
            {databaseSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <Label className="min-w-0 leading-snug">{skill.name}</Label>
                  <span className="tabular-nums w-12 text-right text-sm text-muted-foreground">
                    {animatedLevels.database[index]}%
                  </span>
                </div>
                <Progress value={animatedLevels.database[index]} className="h-2" />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="tools" className="space-y-4 sm:space-y-6">
            {toolsSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <Label className="min-w-0 leading-snug">{skill.name}</Label>
                  <span className="tabular-nums w-12 text-right text-sm text-muted-foreground">
                    {animatedLevels.tools[index]}%
                  </span>
                </div>
                <Progress value={animatedLevels.tools[index]} className="h-2" />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
