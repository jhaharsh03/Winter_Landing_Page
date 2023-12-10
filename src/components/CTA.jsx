import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.marginX} ${styles.padding} 
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
        Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Gain a head start in your business with our services, and rest assured, the decision won't be one you regret.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
       <Button/>
      </div>
    </section>
  )
}

export default CTA