
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Introduction & Journey */}
          <div className="space-y-12">
            {/* Introduction Text */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">👋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Hello! I'm Brahim</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  After <span className="font-semibold text-blue-600">5 years in customer relations</span> (notably at OVHcloud), 
                  I discovered a true passion for web development. This field combines creativity, logic, and continuous learning — 
                  everything that drives me to grow every day.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am currently in professional retraining for a <span className="font-semibold text-purple-600">Bac+3/4 in Full Stack Development</span> and 
                  actively seeking an internship or apprenticeship starting <span className="font-semibold text-green-600">September 2025</span>.
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Journey</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Customer Relations",
                    description: "5 years at OVHcloud & WeFix",
                    color: "from-blue-500 to-blue-600",
                    icon: "🎯"
                  },
                  {
                    step: "02",
                    title: "Discovery",
                    description: "Passion for web development",
                    color: "from-purple-500 to-purple-600",
                    icon: "💡"
                  },
                  {
                    step: "03",
                    title: "Education",
                    description: "Holberton School Lille",
                    color: "from-green-500 to-green-600",
                    icon: "🎓"
                  },
                  {
                    step: "04",
                    title: "Growth",
                    description: "Full-Stack Developer",
                    color: "from-orange-500 to-orange-600",
                    icon: "🚀"
                  }
                ].map((item, index) => (
                  <div key={item.step} className="flex items-center gap-6 group hover:transform hover:scale-105 transition-all duration-300">
                    <div className={`bg-gradient-to-r ${item.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Values */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Core Values & Skills</h3>
                <p className="text-gray-600">What drives me as a developer</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Curiosity",
                    description: "Always exploring new technologies and pushing boundaries",
                    icon: "🔍",
                    gradient: "from-blue-400 to-blue-600"
                  },
                  {
                    title: "Attention to Detail",
                    description: "Precision in every aspect of development",
                    icon: "🎯",
                    gradient: "from-purple-400 to-purple-600"
                  },
                  {
                    title: "Teamwork",
                    description: "Collaborative problem-solver and active listener",
                    icon: "🤝",
                    gradient: "from-green-400 to-green-600"
                  },
                  {
                    title: "Autonomy",
                    description: "Self-directed, proactive, and independent",
                    icon: "🚀",
                    gradient: "from-orange-400 to-orange-600"
                  },
                  {
                    title: "Adaptability",
                    description: "Quick to learn, adapt, and embrace change",
                    icon: "⚡",
                    gradient: "from-pink-400 to-pink-600"
                  }
                ].map((skill, index) => (
                  <div 
                    key={skill.title}
                    className="group relative overflow-hidden bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${skill.gradient} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                    
                    {/* Hover effect gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Together?</h3>
              <p className="text-blue-100 mb-6">
                I'm actively seeking opportunities to contribute and grow with a dynamic team
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
