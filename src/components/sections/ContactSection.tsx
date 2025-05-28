
import { useState } from "react";
import { Download, Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  return (
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
  );
};

export default ContactSection;
