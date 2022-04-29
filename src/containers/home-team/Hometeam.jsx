import React from 'react'
import './hometeam.css'
import { Teamcard } from '../../components'

function Hometeam() {
    const teamArr = [
        {
            name: 'Nandit',
            image: '/team/nandit.jpg',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/nanditmehra'
        },
        {
            name: 'Ravish',
            image: '/team/ravish.png',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/ravish1729'
        },
        {
            name: 'Arpit',
            image: '/team/arpit.png',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com/ArpitBindal4'
        },
        {
            name: 'Sunidhi',
            image: '/team/sunidhi.png',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com'
        },
        {
            name: 'Amarnath',
            image: '/team/amarnath.png',
            linkedin: 'https://linkedin.com',
            tweeter: 'https://twitter.com'
        },
    ]
    return (
        <div className='section__padding hometeam_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>Our Team</p>

                <p className='description__text'>
                    Company is not defined by the things they do but by the team it is done by
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
