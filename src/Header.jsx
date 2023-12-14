import React from 'react';
import styles from './style'

import {Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from './components'


const Header = () => {
  return (
    <div>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {/* Assuming Navbar is imported */}
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; // Changed from Header to App