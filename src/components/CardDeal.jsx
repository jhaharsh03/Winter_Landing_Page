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
        
    Prepare to be pleasantly astonished by the <br className='sm:blockhidden'/> breathtaking beauty of your project.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We view our clients as the very essence of our success, dedicating our utmost efforts to deliver a website tailored to perfection for you and your business, ensuring a symbiotic journey towards excellence.

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