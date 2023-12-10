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
        Our clients are companies, brands, and startups <br className='sm: blockhidden' />that keep the world going around.

        </h2>
        <p className={`${styles.paragraph} max-w-[1000px] mt-5`}>
        They treat diseases, move parcels, insure cars, process payments, create jobs, rent homes and publish news. They are vast and complex businesses 
        requiring design experiences that are just as people-friendly as they are, robust and scalable.
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