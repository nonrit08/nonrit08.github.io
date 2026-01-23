'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import TechStack from './TechStack'

export default function Hero() {
  return (
    <>
      {/* ===== SECTION 1: Introduction ===== */}
      <section 
        id="hero" 
        className="min-h-[70vh] flex items-center justify-center py-12 sm:py-0 bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16">
            
            {/* Left Side - Avatar & Social Links */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-card/50 border-2 border-border flex items-center justify-center text-foreground-muted">
                <FontAwesomeIcon icon={faUser} className="text-4xl sm:text-5xl md:text-6xl" />
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 border border-border rounded-full text-foreground-secondary hover:text-accent hover:border-accent hover:bg-card transition-all"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
                <a 
                  href="mailto:your@email.com"
                  className="p-3 bg-card/50 border border-border rounded-full text-foreground-secondary hover:text-accent hover:border-accent hover:bg-card transition-all"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 border border-border rounded-full text-foreground-secondary hover:text-accent hover:border-accent hover:bg-card transition-all"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="text-center md:text-left max-w-md">
              {/* Greeting */}
              {/* <p className="text-foreground-secondary text-base sm:text-lg mb-2">สวัสดี</p> */}
              
              {/* Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                <span className="text-accent">Nonrit Srinawakul</span>
              </h1>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-accent mx-auto md:mx-0 mb-4 rounded-full"></div>
              
              {/* Description */}
              <p className="text-foreground-secondary leading-relaxed">
                Web developer with 6 years of experience specializing in full-stack development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Tech Stack ===== */}
      <section 
        id="tech-stack" 
        className="min-h-[30vh] flex items-center justify-center py-12 sm:py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-8 sm:mb-10">
            Tech <span className="text-accent">Stack</span>
          </h2>
          
          <TechStack />
        </div>
      </section>
    </>
  )
}