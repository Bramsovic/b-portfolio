
import { useState } from "react";
import { Download, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = () => {
  const recipientEmail = "contact@bhdd.fr";
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

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Nouveau message portfolio - ${formData.name}`;
    const body = [
      `Nom: ${formData.name}`,
      `E-mail: ${formData.email}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="px-4 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Contact</SectionTitle>
        <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <form onSubmit={handleContactSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
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
              <Button type="submit" className="w-full">Ouvrir mon e-mail</Button>
            </form>
          </div>
          <div>
            <Card>
              <CardContent className="pt-5 sm:pt-6">
                <h3 className="mb-4 text-lg font-bold sm:text-xl">Restons en contact</h3>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/in/brhcam" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-primary hover:underline">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/Bramsovic" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-primary hover:underline">
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a href="mailto:contact@bhdd.fr" className="flex items-start gap-3 text-primary hover:underline">
                    <Mail className="h-5 w-5" />
                    <span className="break-all">contact@bhdd.fr</span>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Paris, 75019</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Télécharger le CV
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
