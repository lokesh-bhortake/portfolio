import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import styles from './style'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter} px-10 md:px-20 lg:px-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />        
        </div>
      </div>

    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary px-10 md:px-20 lg:px-0 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Projects />
        <Contact />
      </div>
    </div> 
  </div>
  )
}

export default App
