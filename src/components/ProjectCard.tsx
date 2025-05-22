
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InfoIcon, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  casestudy: {
    problem: string;
    solution: string;
    results: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="icon">
                <InfoIcon className="h-4 w-4" />
                <span className="sr-only">Case Study</span>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium">Case Study</h4>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Problem:</span> {project.casestudy.problem}</p>
                  <p className="text-sm"><span className="font-medium">Solution:</span> {project.casestudy.solution}</p>
                  <p className="text-sm"><span className="font-medium">Results:</span> {project.casestudy.results}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
