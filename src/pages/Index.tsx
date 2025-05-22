
import { useState } from "react";
import { Download, ArrowDown, Mail, Linkedin, Github, Twitter } from "lucide-react";
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
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
  ];

  const backEndSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "Python", level: 60 },
    { name: "SQL/NoSQL", level: 55 },
  ];

  const toolsSkills = [
    { name: "Git", level: 85 },
    { name: "Docker", level: 60 },
    { name: "CI/CD", level: 50 },
    { name: "Agile", level: 70 },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://demo.project.com",
      repoLink: "https://github.com/brahimwebdev/ecommerce",
      casestudy: {
        problem: "Need for a modern, responsive e-commerce solution",
        solution: "Built a full-stack platform with seamless user experience",
        results: "Increased conversion rate by 25% compared to previous version"
      }
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for teams to organize projects and track progress.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["React", "Redux", "Express", "PostgreSQL"],
      demoLink: "https://tasks.project.com",
      repoLink: "https://github.com/brahimwebdev/taskmanager",
      casestudy: {
        problem: "Team coordination and task tracking inefficiencies",
        solution: "Developed intuitive UI with real-time updates",
        results: "50% reduction in project management overhead"
      }
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with forecast data and location search.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["JavaScript", "Weather API", "CSS Grid", "LocalStorage"],
      demoLink: "https://weather.project.com",
      repoLink: "https://github.com/brahimwebdev/weather",
      casestudy: {
        problem: "Accessing weather data in a user-friendly format",
        solution: "Created intuitive dashboard with visual data representation",
        results: "Used by over 1,000 daily users"
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Mentor at Holberton School",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "Brahim is an exceptionally talented developer with a keen eye for detail. His problem-solving skills and dedication to quality code make him stand out among his peers."
    },
    {
      name: "Thomas Laurent",
      role: "Fellow Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      text: "Working with Brahim on team projects has always been a great experience. He's collaborative, shares knowledge generously, and consistently delivers high-quality work on time."
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
    // In a real application, you would send this data to your backend
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
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Brahim"
              className="w-48 h-48 object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hello, I'm <span className="text-primary">Brahim</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full-Stack Web Developer in Training
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => scrollToSection("projects")} size="lg">
              Discover my projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Contact me
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
                Currently pursuing my Bac+2 at Holberton School in Lille, I'm passionate about creating efficient, 
                user-friendly web applications. My journey into web development began with a curiosity about how 
                digital products work, and evolved into a deep dive into both front-end and back-end technologies.
              </p>
              <p className="text-lg mb-6">
                I bring attention to detail, a collaborative mindset, and an enthusiasm for learning new technologies 
                to every project. Whether working independently or as part of a team, I strive to create solutions 
                that are both technically sound and provide an excellent user experience.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Curiosity</div>
                  <p className="text-center text-muted-foreground">Always exploring new technologies</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Precision</div>
                  <p className="text-center text-muted-foreground">Attention to every detail</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="text-primary text-2xl font-bold">Teamwork</div>
                  <p className="text-center text-muted-foreground">Collaborative problem-solver</p>
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
                        <h4 className="font-medium">Discovery</h4>
                        <p className="text-muted-foreground">First code experiments</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">2</div>
                      <div>
                        <h4 className="font-medium">Education</h4>
                        <p className="text-muted-foreground">Holberton School Lille</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">3</div>
                      <div>
                        <h4 className="font-medium">Practice</h4>
                        <p className="text-muted-foreground">Projects & Hackathons</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">4</div>
                      <div>
                        <h4 className="font-medium">Growth</h4>
                        <p className="text-muted-foreground">Continuous learning</p>
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
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Front-End</TabsTrigger>
              <TabsTrigger value="backend">Back-End</TabsTrigger>
              <TabsTrigger value="tools">Tools & Methods</TabsTrigger>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Training Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Experience & Training</SectionTitle>
          <div className="space-y-8 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Holberton School Lille</h3>
                <p className="text-muted-foreground mb-4">2022 - Present</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Full-Stack Web Development curriculum</li>
                  <li>Project-based learning with real-world applications</li>
                  <li>Collaboration on team projects using Agile methodologies</li>
                  <li>Outstanding achievement: Best Hackathon Project (April 2023)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Web Development Internship</h3>
                <p className="text-muted-foreground mb-4">Summer 2023 - Digital Agency</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Assisted in developing responsive websites for clients</li>
                  <li>Implemented frontend designs using React components</li>
                  <li>Collaborated with design and backend teams to deliver integrated solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Additional Certifications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>JavaScript: From Fundamentals to Functional JS (Udemy)</li>
                  <li>React - The Complete Guide (Academind)</li>
                  <li>Introduction to Docker (FreeCodeCamp)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Recent Articles</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="JavaScript Tips" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">5 JavaScript Tips to Improve Your Code</h3>
                <p className="text-muted-foreground mb-4">June 15, 2023</p>
                <p className="mb-4">Key techniques I've learned to write cleaner, more efficient JavaScript code.</p>
                <Button variant="outline" className="w-full">Read on Medium</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="React Hooks" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Understanding React Hooks: A Beginner's Guide</h3>
                <p className="text-muted-foreground mb-4">August 3, 2023</p>
                <p className="mb-4">My journey learning React Hooks and how they've changed the way I build components.</p>
                <Button variant="outline" className="w-full">Read on Dev.to</Button>
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
                    <a href="https://linkedin.com/" className="flex items-center gap-3 text-primary hover:underline">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/" className="flex items-center gap-3 text-primary hover:underline">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com/" className="flex items-center gap-3 text-primary hover:underline">
                      <Twitter className="h-5 w-5" />
                      <span>Twitter</span>
                    </a>
                    <a href="mailto:contact@example.com" className="flex items-center gap-3 text-primary hover:underline">
                      <Mail className="h-5 w-5" />
                      <span>contact@example.com</span>
                    </a>
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
          <p className="text-muted-foreground">© 2023 Brahim - Full-Stack Web Developer</p>
          <p className="text-sm text-muted-foreground mt-2">Made with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
