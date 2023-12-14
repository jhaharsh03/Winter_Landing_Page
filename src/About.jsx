import React from 'react'
import styles, { layout } from './style'
import Layout from './Layout'
import { Button } from './components'
import Features from './Features'
import { features } from './constants'

const About = () => {
  return (

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                    <section id='features' className='{layout.section}'>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Crafting Unique Online Experiences<br className='sm: blockhidden' /> 

        </h2>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
        We are a dedicated team passionate about designing and developing exceptional websites for a diverse range of clients. Our mission is to create compelling online experiences that resonate with your audience, elevate your brand, and drive meaningful results.
        </p>

        <br />
        <br />
        <br />

        <h2 className={styles.heading2}>
        Core Team Members<br className='sm: blockhidden' /> 

        </h2>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
            Harsh Jha    </p>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
            Jawwad Umar    </p>
        
      </div>

        <br />
        <br />

    </section> 
                     
        </div>
    
    </div>



   
  )
}

export default About
