
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <p className="italic mb-6 flex-grow">{testimonial.text}</p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="h-full w-full object-cover" 
            />
          </div>
          <div>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
