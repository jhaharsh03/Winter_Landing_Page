import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './style'

import {Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, GetStarted, Hero, Navbar, Stats, Testimonials } from './components'

import Header from './Header'
import FooterMain from './FooterMain'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <FooterMain />
    </div>
  )
}

export default Layout
