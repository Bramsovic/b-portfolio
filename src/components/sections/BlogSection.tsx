
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";

const BlogSection = () => {
  return (
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
  );
};

export default BlogSection;
