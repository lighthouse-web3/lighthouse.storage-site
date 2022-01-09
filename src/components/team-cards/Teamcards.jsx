import React from 'react'
import './teamcard.css'
// import { IoLogoLinkedin } from 'react-icons/io'
import { AiFillTwitterSquare } from 'react-icons/ai'

function Teamcard({ name, linkedin, tweeter, image }) {
    return (
        <div className='team_card_container'>
            <img src={image} alt="" />

            <div className='member_info'>
                <p className="member_name">
                    {name}
                </p>

                <div className="icons">
                    {/* <IoLogoLinkedin className='social_icon' onClick={() => window.open(linkedin, "_blank")} /> */}
                    <AiFillTwitterSquare
                        className='social_icon'
                        onClick={() => window.open(tweeter, "_blank")} />
                </div>

            </div>

        </div>
    )
}

export default Teamcard
