import React from 'react'
import {
    Header,
    Footer,
    Homebanner,
    Homepackage,
    Hometeam,
    Homebackedby,
    Homekeydiffrence,
    Homekeyfeatures,
    Homeroadmap,
} from "../../containers";
import './about.css'

import { DiscordFloat } from "../../components";
import AboutAngels from '../../containers/about-angels/AboutAngels';

function AboutPage() {
    return (
        <div className="aboutpage">
            <div className="bg_pattern2"></div>
            {/* <div className="bg_pattern3"></div> */}
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div>
            <Header />

            <AboutAngels />
            <Hometeam />
            <Homebackedby />
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default AboutPage