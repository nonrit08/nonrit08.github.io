'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <>
      {/* ===== SECTION 1: Introduction ===== */}
      <section 
        id="hero" 
        className="h-[70vh] flex items-center justify-center bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            {/* Left Side - Avatar & Social Links */}
            <div className="flex flex-col items-center gap-6">
              {/* Avatar */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card/50 border-2 border-border flex items-center justify-center text-foreground-muted">
                <FontAwesomeIcon icon={faUser} className="text-5xl md:text-6xl" />
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
              <p className="text-foreground-secondary text-lg mb-2">สวัสดี, ผมชื่อ</p>
              
              {/* Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                <span className="text-accent">Your Name</span>
              </h1>
              
              {/* Position */}
              <p className="text-xl md:text-2xl text-primary-light font-medium mb-4">
                Web Developer
              </p>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-accent mx-auto md:mx-0 mb-4 rounded-full"></div>
              
              {/* Description */}
              {/* <p className="text-foreground-secondary leading-relaxed">
                นักพัฒนาเว็บไซต์ประสบการณ์ <span className="text-accent font-semibold">6 ปี</span> 
                {' '}มีความเชี่ยวชาญด้าน Frontend และ Backend 
                พร้อมสร้างสรรค์ผลงานที่ตอบโจทย์ทุกความต้องการ
              </p> */}
            </div>

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