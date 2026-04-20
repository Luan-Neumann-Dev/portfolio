import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'

const Index = () => {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}

export default Index