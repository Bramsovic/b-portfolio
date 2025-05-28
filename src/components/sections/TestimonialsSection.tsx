
import TestimonialCard from "@/components/TestimonialCard";
import SectionTitle from "@/components/SectionTitle";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
