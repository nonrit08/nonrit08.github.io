'use client'

import { 
  SiJavascript,
  SiNextdotjs,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiShopify,
  SiDocker,
  SiLine
} from 'react-icons/si'
import { TbDroplet } from 'react-icons/tb'
import { IconType } from 'react-icons'

// Tech item type
interface TechItem {
  name: string
  icon: IconType
  color: string
}

// Tech stack data organized by category
interface TechCategory {
  category: string
  technologies: TechItem[]
}

const techStackData: TechCategory[] = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Liquid', icon: TbDroplet, color: '#67B5F6' }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Ruby', icon: SiRuby, color: '#CC342D' },
      { name: 'Ruby on Rails', icon: SiRubyonrails, color: '#CC0000' }
    ]
  },
  {
    category: 'Database',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' }
    ]
  },
  {
    category: 'E-commerce',
    technologies: [
      { name: 'Shopify', icon: SiShopify, color: '#7AB55C' }
    ]
  },
  {
    category: 'Integration',
    technologies: [
      { name: 'LINE LIFF / Messaging API', icon: SiLine, color: '#00C300' }
    ]
  },
  {
    category: 'DevOps',
    technologies: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' }
    ]
  }
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
      {techStackData.map((stack, index) => (
        <div
          key={index}
          className="bg-card/50 border border-border rounded-lg p-5 hover:bg-card hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
        >
          {/* Category Header */}
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {stack.category}
          </h3>

          {/* Technologies List with Icons */}
          <ul className="space-y-3">
            {stack.technologies.map((tech, techIndex) => {
              const IconComponent = tech.icon
              return (
                <li 
                  key={techIndex}
                  className="text-foreground-secondary text-sm flex items-center gap-3"
                >
                  <IconComponent 
                    className="text-xl group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: tech.color }}
                  />
                  <span>{tech.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
