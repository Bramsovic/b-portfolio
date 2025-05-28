
export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
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
