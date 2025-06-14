
import { Code2, Database, Brain, Smartphone } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "XamSaDine AI",
      subtitle: "Multilingual RAG-Based Islamic Chatbot",
      description: "AI-powered platform providing accurate Islamic guidance using Retrieval-Augmented Generation. Built with custom knowledge base of transcribed content from Islamic scholars, supporting Wolof, French, and English.",
      technologies: ["Python", "RAG", "NLP", "Docker", "Ollama"],
      category: "AI/ML",
      icon: Brain
    },
    {
      id: 2,
      title: "SapioVision",
      subtitle: "Smart Facial Recognition Glasses",
      description: "Advanced security system for Senegalese Police Force with real-time facial recognition and database integration for citizen identification and document verification.",
      technologies: ["Python", "Computer Vision", "Arduino", "Machine Learning"],
      category: "Computer Vision",
      icon: Code2
    },
    {
      id: 3,
      title: "Underwater Exploration Drone",
      subtitle: "Marine Life Detection & 3D Reconstruction",
      description: "Autonomous drone with ML algorithms for marine life detection and underwater mapping. Created 3D reconstructions using neural networks and CUDA processing.",
      technologies: ["Python", "CUDA", "Neural Networks", "3D Modeling"],
      category: "Computer Vision",
      icon: Database
    },
    {
      id: 4,
      title: "Smart Campus Plate Dispenser",
      subtitle: "RFID/NFC Student Card System",
      description: "Automated plate dispenser system using RFID/NFC technology for student card recognition and database verification at university cafeteria.",
      technologies: ["Python", "RFID/NFC", "Database Integration", "Machine Learning"],
      category: "IoT",
      icon: Smartphone
    },
    {
      id: 5,
      title: "Algae-Based Biofuel System",
      subtitle: "Sustainable Energy Production",
      description: "Research project developing closed-loop photobioreactor for algae cultivation with monitoring sensors and automation for optimal growth conditions.",
      technologies: ["Arduino", "Python", "CAD", "Biochemistry"],
      category: "Research",
      icon: Code2
    },
    {
      id: 6,
      title: "Educational Robotics Platform",
      subtitle: "Mini Fighter Bots for Learning",
      description: "Interactive robotics platform teaching children programming, AI concepts, and sensor integration through hands-on workshops and structured modules.",
      technologies: ["Arduino", "CAD", "Scratch", "Robotics"],
      category: "Education",
      icon: Brain
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Projects
          </h1>
          <div className="w-20 h-px bg-gray-600 mb-8"></div>
          <p className="text-xl text-gray-400 font-light">
            A collection of projects showcasing my journey in AI, data analysis, and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <div
                key={project.id}
                className="group bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-gray-400" />
                    <span className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-700/30 text-gray-400 px-2 py-1 rounded border border-gray-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8">
            <Code2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">More Projects in Development</h3>
            <p className="text-gray-400 mb-6">
              I'm constantly working on new projects and exploring emerging technologies. 
              Check back soon for updates!
            </p>
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4 font-mono text-sm text-left max-w-md mx-auto">
              <div className="text-gray-400">$ git status</div>
              <div className="text-gray-500 mt-2">
                On branch main<br/>
                Your branch is up to date with 'origin/main'.<br/>
                <span className="text-gray-400">Working on new features...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
