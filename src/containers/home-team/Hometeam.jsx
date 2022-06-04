import React from 'react'
import './hometeam.css'
import { Teamcard } from '../../components'

function Hometeam() {
    const teamArr = [
        {
            name: 'Nandit',
            image: '/team/nandit.jpg',
            tweeter: 'https://twitter.com/nanditmehra'
        },
        {
            name: 'Ravish',
            image: '/team/ravish.png',

            tweeter: 'https://twitter.com/ravish1729'
        },
        {
            name: 'Arpit',
            image: '/team/arpit.png',

            tweeter: 'https://twitter.com/ArpitBindal4'
        },
        {
            name: 'Sunidhi',
            image: '/team/sunidhi.png',
            linkedin: 'https://www.linkedin.com/in/sunidhi-chawla-32bb391a5',

        },
        {
            name: 'Ayobami Oki',
            image: '/team/Ayobami_oki.png',
        },
        {
            name: 'Tejiri Odiase',
            image: '/team/tejiri_odiase.png',
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
