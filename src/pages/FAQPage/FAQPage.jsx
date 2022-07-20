import React from 'react'
import { DiscordFloat } from '../../components'
import { Footer, Header } from '../../containers'
import FAQContainer from '../../containers/Faq-container/FaqContainer'
import './FAQPage.scss'

function FAQPage() {
    return (
        <div className="FAQPage">
            <div className="bg_pattern2"></div>
            <div className="bg_pattern3"></div>
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div>
            <Header />
            <FAQContainer />
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default FAQPage