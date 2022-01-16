import React from 'react'
import './hometeam.css'
import { Teamcard } from '../../components'

function Hometeam() {
    const teamArr = [
        {
            name: 'Nandit',
            image: '/nandit.jpg',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/nanditmehra'
        },
        {
            name: 'Ravish',
            image: '/ravish.jpg',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/ravish1729'
        },
    ]
    return (
        <div className='section__padding hometeam_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>Our Team</p>

                <p className='description__text'>
                    Lighthouse community is lead by builders
                </p>
            </div>

            <div className="team_members">
                {teamArr.map((member) =>
                    <Teamcard {...member} />
                )}
            </div>








        </div>
    )
}

export default Hometeam
