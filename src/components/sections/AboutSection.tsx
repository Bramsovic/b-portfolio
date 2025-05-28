
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Introduction Text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                After <strong>5 years in customer relations</strong> (notably at OVHcloud), I discovered a true passion for web development. 
                This field combines creativity, logic, and continuous learning — everything that drives me to grow every day.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am currently in professional retraining for a <strong>Bac+3/4 in Full Stack Development</strong> and actively seeking an 
                internship or apprenticeship starting <strong>September 2025</strong>.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Values & Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Curiosity",
                    description: "Always exploring new technologies",
                    icon: "🔍"
                  },
                  {
                    title: "Attention to Detail",
                    description: "Precision in every aspect of development",
                    icon: "🎯"
                  },
                  {
                    title: "Teamwork",
                    description: "Collaborative problem-solver",
                    icon: "🤝"
                  },
                  {
                    title: "Autonomy",
                    description: "Self-directed and proactive",
                    icon: "🚀"
                  },
                  {
                    title: "Adaptability",
                    description: "Quick to learn and adjust",
                    icon: "⚡"
                  }
                ].map((skill, index) => (
                  <div 
                    key={skill.title}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="font-semibold text-gray-900 mb-1">{skill.title}</div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Customer Relations",
                    description: "5 years at OVHcloud & WeFix",
                    color: "bg-blue-500"
                  },
                  {
                    step: "2",
                    title: "Discovery",
                    description: "Passion for web development",
                    color: "bg-purple-500"
                  },
                  {
                    step: "3",
                    title: "Education",
                    description: "Holberton School Lille",
                    color: "bg-green-500"
                  },
                  {
                    step: "4",
                    title: "Growth",
                    description: "Full-Stack Developer",
                    color: "bg-orange-500"
                  }
                ].map((item, index) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className={`${item.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
