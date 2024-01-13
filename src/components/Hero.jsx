import React from 'react'
import hero from '../assets/images/hero_banner.svg'
import styles from '../style'
import { handleDownload } from '../constants/constants'


const Hero = () => {

  function scrollIntoView(id) {
    const projectsElement = document.getElementById(id); 
    if (projectsElement) {
      console.log(projectsElement)
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id='home' className={`flex text-accent py-36 md:py-32 gap-2 ${styles.sizeFull}`}>
      <div className={`${styles.flexCenter} flex-col md:flex-row gap-2 w-full px-10 md:px-20 lg:px-0`}>

        <div className={`${styles.flexCenter} flex-col ${styles.sizeFull}  gap-6`}>
          <div className={`flex-col ${styles.flexCenter} md:items-start text-center`} >
            <h1 className='text-h1'><strong>Lokesh Bhortake</strong></h1>
            <h1 className='text-h3'><strong>Frontend Developer</strong></h1>
          </div>
          <p className='text-base'>Creating beautiful websites from your thoughts and needs.</p>
          <div className='flex flex-col sm:flex-row gap-4 px-2 items-center justify-start'>
            <button className={`w-60 ${styles.filledButton}`} onClick={() => scrollIntoView('projects')}>Projects</button>
            <button className= {`w-60 ${styles.boderedButton}`} onClick={handleDownload}>Resume</button>
          </div>
        </div>

        <div className={`hidden sm:block ${styles.heroBanner} `} >  
          <img src={hero} alt="banner"/>
        </div>
      </div>
    </section>
  )
}

export default Hero