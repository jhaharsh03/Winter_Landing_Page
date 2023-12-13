import React from 'react'
import { apple, bill, google, one } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={one} alt="billing"  
        className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Transform your online presence with expert advice for a website that truly captivates.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our expert team of designers, developers, illustrators and project managers work with streamlined processes to break through organizational roadblocks. We translate research into solutions, 
      crafting thoughtful and unified brands, apps, websites, interfaces and systems.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Through challenging core assumptions, we shape the products and services
      that improve the lives of thousands every single day.
      </p>

      {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="apple_store" 
        className='w-[128px] h-[42-px] object-contain mr-5 cursor-pointer'
        />

        <img src={google} alt="goole_store" 
        className='w-[128px] h-[42-px] object-contain cursor-pointer'
        /> */}

      {/* </div> */}

      </div>

    </section>
  )
}

export default Billing