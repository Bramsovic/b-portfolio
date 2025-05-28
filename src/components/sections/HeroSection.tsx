
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-8 overflow-hidden rounded-full border-4 border-primary/20">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Brahim Haddad"
            className="w-48 h-48 object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Hello, I'm <span className="text-primary">Brahim</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          Junior Full-Stack Web Developer
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={() => onScrollToSection("projects")} size="lg">
            See My Projects
          </Button>
          <Button onClick={() => onScrollToSection("contact")} variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onScrollToSection("about")}
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
