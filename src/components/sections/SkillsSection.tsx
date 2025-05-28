
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "@/components/SectionTitle";
import { frontEndSkills, backEndSkills, databaseSkills, toolsSkills } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Front-End</TabsTrigger>
            <TabsTrigger value="backend">Back-End</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="space-y-6">
            {frontEndSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <Label>{skill.name}</Label>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="backend" className="space-y-6">
            {backEndSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <Label>{skill.name}</Label>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="database" className="space-y-6">
            {databaseSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <Label>{skill.name}</Label>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </TabsContent>
          <TabsContent value="tools" className="space-y-6">
            {toolsSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <Label>{skill.name}</Label>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
