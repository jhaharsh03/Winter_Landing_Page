import React from 'react'
import { features } from '../constants'
import styles from '../style'
import { layout } from '../style'
import Button from './Button'
import FeedbackCard from './FeedbackCard'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1? "mb-6":"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[20%] h-[20%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)


const Business = () => {
  return (
    <section id='features' className='{layout.section}'>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Our valued clients encompass a diverse array of<br className='sm: blockhidden' />companies, brands, and startups

        </h2>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
        They are are the driving force behind the perpetual motion of our global landscape. Each of them contributes uniquely to shaping industries, fostering innovation, and making a lasting impact on the ever-evolving world stage. Together, we embark on creative journeys to amplify their stories and elevate their presence in the dynamic tapestry of today's business ecosystem.
        </p>
        
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index = {index}/>
        ))}
      </div>

    </section>
  )
}

export default Business