import React from 'react'
import {
    Header,
    Footer,
    Hometeam,
    Homebackedby,
} from "../../containers";
import './about.css'

import { DiscordFloat } from "../../components";
import AboutAngels from '../../containers/about-angels/AboutAngels';
import Testimonials from '../../containers/Testimonials/Testimonials';
import Pricing from '../../containers/Pricing-Section/Pricing';

function AboutPage() {
    return (
        <div className="aboutpage">
            <div className="bg_pattern2"></div>
            {/* <div className="bg_pattern3"></div> */}
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div>
            <Header />

            <Hometeam />
            <Homebackedby />
            <AboutAngels />
            <Testimonials />
            <Pricing />
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default AboutPage