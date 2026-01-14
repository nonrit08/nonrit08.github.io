'use client'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Hi, I'm <span className="text-cyan-400">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer | TypeScript Enthusiast
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}