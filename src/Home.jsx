import React from 'react'
import styles from './style'
import {Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from './components'


function Home() {
  return (
  //   <div>
     
          

            
  // </div>

  <div>
   

    <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <Hero />
            </div>
    </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Stats />
                      <Business />
                      <Billing />
                      <CardDeal />
                      {/* <Testimonials /> */}
                      <Clients />
                      <CTA />
                      {/* <Footer /> */}
                    </div>
            </div>
 </div>
    


  )
}

export default Home
