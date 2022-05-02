import React from 'react'
import './AboutAngels.css'
import Angelcard from '../../components/angel-card/AngelCard'

function AboutAngels() {
    const teamArr = [
        {
            name: 'Balaji Srinivasan',
            image: '/angels/balaji.png',
            designation: 'Ex-CTO Coinbase',
            linkedin: 'https://www.linkedin.com/in/balajissrinivasan',
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

                <div className="team_members">
                    {teamArr.map((member) =>
                        <Angelcard {...member} />
                    )}
                </div>
            </div>


        </div>
    )
}

export default AboutAngels
