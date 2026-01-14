import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Projects />
      </main>
    </>
  )
}