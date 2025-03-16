import React from 'react'
import Offer from '../../components/Offers'
import Nav from "../../components/Nav"
import TopSection from '../../components/TopSection'
import ThirdSection from '../../components/ThirdSection'
import Footer from "../../components/Footer"
import OffersHeader from './OffersHeader'
import './offers.css'

function Offers() {
  return (
    <div>
        <TopSection/>
        <Nav />
        <OffersHeader/>
        <Offer />
        <ThirdSection/>
        <Footer />
    </div>
  )
}

export default Offers
