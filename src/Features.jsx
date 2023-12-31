import React from 'react'
import styles from './style'

import {Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from './components'


function Features() {
  return (
    <div>
      <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <CardDeal />
        </div>
      </div>



    </div>
    </div>
  )
}

export default Features
