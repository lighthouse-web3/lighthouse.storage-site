import React from 'react'
import './LandingPageTitleSection.css'

import { BiImages } from 'react-icons/bi';

function LandingPageTitleSection() {
    return (
        <div className="LandingPageTitleSection section__padding">
            <div className="title">
                <p className="gradient__text title__text">
                    Few Sections
                </p>
                <p className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, assumenda.</p>
            </div>
            <div className="cardContainer">
                <div className="card">
                    <div className="icon">
                        <BiImages />
                    </div>
                    <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolorum obcaecati, eius perspiciatis ratione nisi quia optio delectus. Fuga, laboriosam!</div>
                </div>
                <div className="card">
                    <div className="icon">
                        <BiImages />
                    </div>
                    <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolorum obcaecati, eius perspiciatis ratione nisi quia optio delectus. Fuga, laboriosam!</div>
                </div>
                <div className="card">
                    <div className="icon">
                        <BiImages />
                    </div>
                    <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dolorum obcaecati, eius perspiciatis ratione nisi quia optio delectus. Fuga, laboriosam!</div>
                </div>
            </div>

        </div>
    )
}

export default LandingPageTitleSection