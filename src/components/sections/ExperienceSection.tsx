
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";

const ExperienceSection = () => {
  return (
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
  );
};

export default ExperienceSection;
