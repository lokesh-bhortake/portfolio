import React from 'react'
import about_img from '../assets/images/about_img.svg';
import { about_text, skills } from '../constants/constants';
import styles from '../style';

const About = () => {
  return (
    <section id='about' className='text-accent gap-8 py-2'>
      <div className='flex gap-8'>
        <div className={`flex flex-col ${styles.sizeFull} gap-14 p-4`}>
          <h3 className='text-h3 font-bold text-center'>About</h3>
          <p className='text-base text-justify'>{about_text}</p>
        </div>
        <div className={`hidden md:flex ${styles.sizeFull} items-end`}>
          <img src={about_img} alt="about_img" className={`${styles.sizeFull}`}/>
        </div>
      </div>

      <div className='relative items-center'>
        <div className={`left-[15%] md:left-[25%] lg:left-[30%] layer-blur ${styles.blurDiv}`}></div>
      </div>

      <div className={`${styles.flexCenter} flex-col gap-8 py-4`}>
        <h3 className='text-h3 font-bold'>Skills</h3>
        <ul className={`${styles.flexCenter} flex-wrap gap-x-6 gap-y-8 py-4 px-2`}>
          {
            skills.map((skill, index) => (
              <li key={index} className={`${styles.flexCenter} flex-col gap-4 px-4 py-2`}>
                <img src={skill.icon} alt={skill.text} className='w-12 h-12'/>
                <p className='text-center text-base'>{skill.text}</p>
              </li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default About