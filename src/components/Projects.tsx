const projects = [
    {
      title: "Project 1",
      description: "Description of your amazing project",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://github.com/yourusername/project1"
    },
    // เพิ่มโปรเจกต์อื่นๆ
  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="min-h-screen bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }