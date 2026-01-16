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
      <section id="projects" className="min-h-screen bg-card/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-12">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:transform hover:scale-105 hover:border-border-hover transition-all"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-accent hover:text-accent-light transition-colors"
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