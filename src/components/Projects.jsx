import React from 'react'
import { projects, openLink } from '../constants/constants'
import styles from '../style'

const Projects = () => {
  
  return (
    <section id='projects' className='flex flex-col text-accent my-48 gap-12'>
      <h3 className='justify-center text-center font-bold text-h3'>Projects</h3>
      <div className='flex flex-wrap lg:flex-row gap-6 justify-center lg:justify-start'>
        {
          projects.map((project, index) => (
            <div key={index} className='flex lg:flex-1 flex-col bg-complimentary project-card gap-4 px-1 py-2 rounded-md'>
              <div className={`${styles.flexCenter} p-8`}>
                <img src={project.image} alt={project.title} className={`${styles.sizeFull} rounded-sm`} />
              </div>
              <div className='flex flex-col gap-4 px-4 py-2 h-full'>
                <h5 className='text-h5 font-bold'>{project.title}</h5>
                <p className='text-justify text-base'>{project.description}</p>
                <p><span className='font-bold text-base'>Tech Stack Used: </span>{project.tech}</p>
                <div className='flex gap-4 py-4 justify-center items-end h-full'>
                  {
                    project.btn.map((btn, index) => (
                      <button key={index} 
                        onClick={() => openLink(btn.btn_link)}
                        className={`w-full ${index ? styles.boderedButton : styles.filledButton}`}    
                      >
                        {btn.btn_text}
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          )) 
        }
      </div>
    </section>
  )
}

export default Projects