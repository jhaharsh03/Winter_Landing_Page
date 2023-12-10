import React from 'react'

import { card } from '../assets'
import styles  from '../style'
import { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}> 
        <h2 className={styles.heading2}>
        Don’t be surprised at how stunning <br className='sm:blockhidden'/> your project is once you have decided
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        One of the most important pieces of the great product experience is you. A creative agency that crafting a digital experience.
        Agency with incredible design and development expertise. Based in Yogyakarta, India

        </p>
      
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card"
        className='w-[100%] h-[100%]'
        />
      </div>

      
    </section>
  )
}

export default CardDeal