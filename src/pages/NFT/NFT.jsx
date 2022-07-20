import React from 'react'
import { Footer, Header } from '../../containers'
import LandingPageBanner from '../../containers/LandingPage-Banner/LandingPageBanner'
import LandingPageClient from '../../containers/LandingPage-clients/LandingPageClient'
import LandingPageCommunity from '../../containers/LandingPage-Community/LandingPageCommunity'
import LandingPageList from '../../containers/LandingPage-List/LandingPageList'
import LandingPagePoints from '../../containers/LandingPage-Points/LandingPagePoints'
import LandingPageTitleSection from '../../containers/LandingPage-TitleSections/LandingPageTitleSection'
import './NFT.css'

function NFT() {
    return (
        <div className="landingPage_NFT ">
            <div className="bg_pattern2"></div>
            <div className="bg_pattern3"></div>
            <div className="bg_pattern4"></div>
            {/* <div className="bg_pattern5"></div> */}
            <Header />
            <LandingPageBanner />
            <LandingPageClient />
            <LandingPagePoints />
            <LandingPageList />
            <LandingPageTitleSection />
            <LandingPageCommunity />
            <Footer />
        </div>
    )
}

export default NFT