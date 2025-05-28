
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
