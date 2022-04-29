import React from 'react'
import './AboutAngels.css'
import { Teamcard } from '../../components'

function AboutAngels() {
    const teamArr = [
        {
            name: 'Balaji Srinivasan',
            image: '/angels/balaji.png',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/balajis'
        },
    ]
    return (
        <div className='section__padding angels_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>Our Angels</p>

                <p className='description__text'>
                    Our mentors and investors believes in our vision and empower us to acheive it.
                </p>
            </div>

            <div className="angels">
                {/* <div className="angels__image">
                    <img src="/angels/balaji.png" alt="angelImage" />
                </div>
                <div className="angels__description">
                    <p className="name">Balaji Srinivasan</p>
                    <p className="text">Balaji Srinivasan is an entrepreneur and essayist. He was co-founder of Counsyl, and is the former chief technology officer of Coinbase and former general partner at Andreessen Horowitz.</p>
                </div> */}

                <div className="team_members">
                    {teamArr.map((member) =>
                        <Teamcard {...member} />
                    )}
                </div>
            </div>


        </div>
    )
}

export default AboutAngels
