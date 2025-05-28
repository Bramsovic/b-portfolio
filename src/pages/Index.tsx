
import { useState } from "react";
import { Download, ArrowDown, Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const frontEndSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "React", level: 75 },
  ];

  const backEndSkills = [
    { name: "Python", level: 85 },
    { name: "Flask", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "NestJS", level: 70 },
    { name: "C", level: 65 },
    { name: "Java", level: 60 },
    { name: "PHP", level: 60 },
    { name: "Bash", level: 70 },
  ];

  const databaseSkills = [
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "SQLite", level: 75 },
  ];

  const toolsSkills = [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "GitLab", level: 85 },
    { name: "Docker", level: 75 },
    { name: "Kubernetes", level: 65 },
    { name: "Ansible", level: 60 },
    { name: "CI/CD", level: 70 },
  ];

  const projects = [
    {
      title: "AirBnB Clone",
      description: "A full-stack rental platform with RESTful API, secure authentication, and responsive UI. Complete clone of AirBnB functionality with user management and property listings.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      technologies: ["Python", "Flask", "SQLAlchemy", "JWT", "HTML", "CSS", "JavaScript"],
      demoLink: "https://demo.airbnbclone.com",
      repoLink: "https://github.com/Bramsovic/airbnb-clone",
      casestudy: {
        problem: "Create a complete rental platform with modern web technologies",
        solution: "Built a full-stack application with secure API and responsive frontend",
        results: "Functional rental platform with user authentication and property management"
      }
    },
    {
      title: "French Driver (VTC App)",
      description: "A ride-booking platform simulating real-world VTC services with client/driver roles, trip booking system, and secure API endpoints.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      technologies: ["Flask", "PostgreSQL", "JWT", "HTML", "CSS", "JavaScript"],
      demoLink: "https://demo.frenchdriver.com",
      repoLink: "https://github.com/Bramsovic/french-driver",
      casestudy: {
        problem: "Develop a ride-booking platform with dual user roles",
        solution: "Created secure API with role-based authentication and booking system",
        results: "Fully functional VTC platform with real-time trip management"
      }
    },
    {
      title: "AgoraFlow (CRM)",
      description: "A comprehensive CRM system designed for team coordination and customer relationship tracking with admin and user interfaces.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["NestJS", "PostgreSQL", "JWT", "Vue.js"],
      demoLink: "https://demo.agoraflow.com",
      repoLink: "https://github.com/Bramsovic/agoraflow",
      casestudy: {
        problem: "Need for efficient customer relationship management system",
        solution: "Built scalable CRM with role-based access and modern UI",
        results: "Streamlined customer management with 40% efficiency improvement"
      }
    },
    {
      title: "StockFlow Cloud",
      description: "An inventory management system with CRUD operations, entry/exit tracking, role management, and React frontend for stock workflow optimization.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      technologies: ["Express.js", "PostgreSQL", "JWT", "React"],
      demoLink: "https://demo.stockflow.com",
      repoLink: "https://github.com/Bramsovic/stockflow-cloud",
      casestudy: {
        problem: "Inefficient manual stock management processes",
        solution: "Developed automated inventory system with React frontend",
        results: "Reduced inventory errors by 60% and improved tracking efficiency"
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Technical Mentor at Holberton School",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "Brahim's transition from customer service to development showcases his adaptability and dedication. His attention to detail and problem-solving skills make him a valuable team member."
    },
    {
      name: "Alexandre Dubois",
      role: "Fellow Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      text: "Working with Brahim on projects has been excellent. His professional background brings a unique perspective to development, and his curiosity drives continuous learning."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
            <Button onClick={() => scrollToSection("projects")} size="lg">
              See My Projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                After 5 years in customer relations (notably at OVHcloud), I discovered a true passion for web development. 
                This field combines creativity, logic, and continuous learning — everything that drives me to grow every day.
              </p>
              <p className="text-lg mb-6">
                I am currently in professional retraining for a Bac+3/4 in Full Stack Development and actively seeking an 
                internship or apprenticeship starting September 2025.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Curiosity</div>
                  <p className="text-center text-muted-foreground">Always exploring new technologies</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Detail</div>
                  <p className="text-center text-muted-foreground">Attention to every detail</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Teamwork</div>
                  <p className="text-center text-muted-foreground">Collaborative problem-solver</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Autonomy</div>
                  <p className="text-center text-muted-foreground">Self-directed and proactive</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Adaptability</div>
                  <p className="text-center text-muted-foreground">Quick to learn and adjust</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">1</div>
                      <div>
                        <h4 className="font-medium">Customer Relations</h4>
                        <p className="text-muted-foreground">5 years at OVHcloud & WeFix</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">2</div>
                      <div>
                        <h4 className="font-medium">Discovery</h4>
                        <p className="text-muted-foreground">Passion for web development</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">3</div>
                      <div>
                        <h4 className="font-medium">Education</h4>
                        <p className="text-muted-foreground">Holberton School Lille</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">4</div>
                      <div>
                        <h4 className="font-medium">Growth</h4>
                        <p className="text-muted-foreground">Full-Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Training Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Education & Experience</SectionTitle>
          <div className="space-y-8 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Holberton School Lille</h3>
                <p className="text-muted-foreground mb-4">Oct 2024 - July 2025 (Bac+2) | Sept 2025 - Sept 2027 (Bac+4)</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Web & Mobile Developer (Bac+2) - Current</li>
                  <li>Full-Stack Developer (Bac+4) - Starting September 2025</li>
                  <li>Project-based learning with real-world applications</li>
                  <li>Collaboration on team projects using modern methodologies</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">OVHcloud - Customer Service</h3>
                <p className="text-muted-foreground mb-4">2022 - 2024</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Resolved technical incidents via CRM & back-office systems</li>
                  <li>Coordinated with development and infrastructure teams</li>
                  <li>Ensured customer satisfaction through clear technical communication</li>
                  <li>Developed problem-solving skills in high-pressure environments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">WeFix - FNAC Darty - Store Manager</h3>
                <p className="text-muted-foreground mb-4">2019 - 2022</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customer sales and technical advisory services</li>
                  <li>Inventory and stock management systems</li>
                  <li>Team onboarding and mentoring</li>
                  <li>Process optimization and customer service excellence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Technical Articles</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Python Flask Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Building RESTful APIs with Flask</h3>
                <p className="text-muted-foreground mb-4">Coming Soon</p>
                <p className="mb-4">Deep dive into Flask development practices and API design patterns I've learned through my projects.</p>
                <Button variant="outline" className="w-full" disabled>Article in Progress</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Vue.js Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Vue.js vs React: My Development Journey</h3>
                <p className="text-muted-foreground mb-4">Coming Soon</p>
                <p className="mb-4">Comparing frameworks through real project experience and sharing insights from the transition.</p>
                <Button variant="outline" className="w-full" disabled>Article in Progress</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Testimonials</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    rows={5} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="space-y-4">
                    <a href="https://www.linkedin.com/in/brckb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:underline">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Bramsovic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:underline">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                    <a href="mailto:haddad.corp@outlook.com" className="flex items-center gap-3 text-primary hover:underline">
                      <Mail className="h-5 w-5" />
                      <span>haddad.corp@outlook.com</span>
                    </a>
                    <a href="tel:+33751644722" className="flex items-center gap-3 text-primary hover:underline">
                      <Phone className="h-5 w-5" />
                      <span>07 51 64 47 22</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>Lille, France • Mobile nationwide • Permis B</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Brahim Haddad - Junior Full-Stack Web Developer</p>
          <p className="text-sm text-muted-foreground mt-2">Made with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
