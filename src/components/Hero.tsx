'use client'

export default function Hero() {
  return (
    <>
      {/* ===== SECTION 1: Introduction ===== */}
      <section 
        id="hero" 
        className="h-[70vh] flex items-center justify-center bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to"
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-secondary mb-6">
            Full Stack Developer | TypeScript Enthusiast
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-foreground rounded-full hover:bg-primary-dark transition-all transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Skills ===== */}
      <section 
        id="skills" 
        className="h-[30vh] flex items-center justify-center bg-background"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
            My <span className="text-accent">Skills</span>
          </h2>
          
          {/* Skills Grid - TODO: เพิ่ม skills ทีหลัง */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {/* Placeholder skill items */}
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center hover:bg-card-hover/50 hover:border-border-hover transition-all">
              <span className="text-foreground-secondary text-sm">Skill 1</span>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center hover:bg-card-hover/50 hover:border-border-hover transition-all">
              <span className="text-foreground-secondary text-sm">Skill 2</span>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center hover:bg-card-hover/50 hover:border-border-hover transition-all">
              <span className="text-foreground-secondary text-sm">Skill 3</span>
            </div>
            <div className="bg-card/50 border border-border rounded-lg p-4 text-center hover:bg-card-hover/50 hover:border-border-hover transition-all">
              <span className="text-foreground-secondary text-sm">Skill 4</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}