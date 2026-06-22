import './App.css'
import Hero from './sections/hero.tsx'
import About from './sections/about.tsx'
import Experience from './sections/experience.tsx'
import Projects from './sections/projects.tsx'
import Education from './sections/education.tsx'
import Links from './sections/links.tsx'


function App() {

  return (
    // handling background of the page using gradients from figma prototype.
    <div style={{
      background: `linear-gradient(to bottom,
        #FFE398 0%,
        #FF8AAB 4%,
        #FFB029 9%,
        #74D3A7 13%,
        #EEF2FF 18%,
        #4366C9 23%,
        #1E3576 26%,
        #071E24 30%,
        #0D0529 31%,
        #11010A 32%,
        #160518 33%,
        #F45667 35%,
        #FD3CA0 40%,
        #FF9EBB 45%,
        #FFDDE1 48%,
        #FFF0F1 52%,
        #FFC4FF 55%,
        #DFBDFF 56%,
        #5D91A2 60%,
        #DD8736 63%,
        #ead595 67%,
        #F1C6FF 69%,
        #9FD9E6 72%,
        #5EBACF 76%,
        #B7CF8D 80%,
        #EFDED8 85%,
        #E83F42 93%,
        #D6D329 95%,
        #E4FC87 100%
      )`,
      backgroundAttachment: 'local',
      backgroundSize: '100% 600lvh',
      backgroundRepeat: 'no-repeat'
    }} className="main-page 
          
                  overflow-y-scroll 
                  h-dvh 
                  snap-y 
                  snap-mandatory
                  font-helvetica
                  
                  snap-y">
      <section className = "snap-start"> { /* snap-start to handle/mark the snap effect*/ }
        <Hero /> 
      </section>
      <section className = "snap-start"> 
        <About /> 
      </section>
      <section className = "snap-start"> 
        <Experience /> 
      </section >
      <section className = "snap-start">
        <Projects /> 
      </section>
      <section className = "snap-start"> 
        <Education /> 
      </section>
      <section className = "snap-start"> 
        <Links /> 
      </section>
    </div>
  ) 
}

export default App
