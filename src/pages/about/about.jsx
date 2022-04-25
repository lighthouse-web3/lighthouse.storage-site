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

function AboutPage() {
    return (
        <div className="aboutpage">
            <div className="bg_pattern2"></div>
            {/* <div className="bg_pattern3"></div> */}
            {/* <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div> */}
            <Header />
            <Homeroadmap />
            <Hometeam />
            <Homebackedby />
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default AboutPage