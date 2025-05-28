
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-black rounded-full morphing-shape"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-black rounded-lg floating-animation"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-black transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="slide-in-left">
          <SectionTitle>About Me</SectionTitle>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Introduction & Journey */}
          <div className="space-y-12">
            {/* Introduction Text */}
            <div className="modern-card p-8 slide-in-left stagger-1 group">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl morphing-shape group-hover:scale-110 transition-transform duration-300">
                    👋
                  </div>
                  <h3 className="text-3xl font-bold text-black gradient-text">Hello! I'm Brahim</h3>
                </div>
                
                <div className="relative">
                  <div className="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-lg text-gray-800 leading-relaxed relative z-10">
                    After <span className="font-bold text-black border-b-2 border-black">5 years in customer relations</span> (notably at OVHcloud), 
                    I discovered a true passion for web development. This field combines creativity, logic, and continuous learning — 
                    everything that drives me to grow every day.
                  </p>
                </div>
                
                <p className="text-lg text-gray-800 leading-relaxed">
                  I am currently in professional retraining for a <span className="font-bold text-black">Bac+3/4 in Full Stack Development</span> and 
                  actively seeking an internship or apprenticeship starting <span className="font-bold text-black bg-gray-100 px-2 py-1 rounded">September 2025</span>.
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="modern-card p-8 slide-in-left stagger-2">
              <h3 className="text-3xl font-bold text-black mb-8 text-center gradient-text">My Journey</h3>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Customer Relations",
                    description: "5 years at OVHcloud & WeFix",
                    icon: "🎯"
                  },
                  {
                    step: "02",
                    title: "Discovery",
                    description: "Passion for web development",
                    icon: "💡"
                  },
                  {
                    step: "03",
                    title: "Education",
                    description: "Holberton School Lille",
                    icon: "🎓"
                  },
                  {
                    step: "04",
                    title: "Growth",
                    description: "Full-Stack Developer",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <div key={item.step} className={`flex items-center gap-6 group hover:transform hover:scale-105 transition-all duration-500 fade-in-up stagger-${index + 1}`}>
                    <div className="bg-black text-white w-20 h-20 rounded-3xl flex items-center justify-center font-bold text-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6 morphing-shape">
                      {item.step}
                    </div>
                    <div className="flex-1 relative">
                      <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl floating-animation">{item.icon}</span>
                          <h4 className="font-bold text-2xl text-black group-hover:text-gray-700 transition-colors duration-300">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Values */}
          <div className="space-y-8">
            <div className="modern-card p-8 slide-in-right stagger-1">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-black mb-3 gradient-text">Core Values & Skills</h3>
                <p className="text-gray-600 text-lg">What drives me as a developer</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Curiosity",
                    description: "Always exploring new technologies and pushing boundaries",
                    icon: "🔍"
                  },
                  {
                    title: "Attention to Detail",
                    description: "Precision in every aspect of development",
                    icon: "🎯"
                  },
                  {
                    title: "Teamwork",
                    description: "Collaborative problem-solver and active listener",
                    icon: "🤝"
                  },
                  {
                    title: "Autonomy",
                    description: "Self-directed, proactive, and independent",
                    icon: "🚀"
                  },
                  {
                    title: "Adaptability",
                    description: "Quick to learn, adapt, and embrace change",
                    icon: "⚡"
                  }
                ].map((skill, index) => (
                  <div 
                    key={skill.title}
                    className={`group relative overflow-hidden bg-gray-50 hover:bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-500 hover:shadow-xl hover:-translate-y-1 fade-in-up stagger-${index + 1}`}
                  >
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 morphing-shape">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                    
                    {/* Modern hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 shimmer-effect"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-black text-white p-8 rounded-3xl text-center shadow-2xl slide-in-right stagger-2 group hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">Ready to Build Together?</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  I'm actively seeking opportunities to contribute and grow with a dynamic team
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
