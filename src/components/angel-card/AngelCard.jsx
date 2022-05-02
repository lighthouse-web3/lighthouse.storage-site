import React from 'react'
import './AngelCard.css'
import { IoLogoLinkedin } from 'react-icons/io'
import { AiFillTwitterSquare } from 'react-icons/ai'

function Angelcard({ name, designation, linkedin, tweeter, image }) {
    return (
        <div className='angel_card_container'>
            <img src={image} alt="" />

            <div className='member_info'>
                <p className="member_name">
                    {name}
                </p>
                <div className="member_designation">
                    {designation}
                </div>

                <div className="icons">
                    {
                        linkedin && <IoLogoLinkedin className='social_icon' onClick={() => window.open(linkedin, "_blank")} />
                    }

                    {
                        tweeter && <AiFillTwitterSquare
                            className='social_icon'
                            onClick={() => window.open(tweeter, "_blank")} />
                    }



                </div>

            </div>

        </div>
    )
}

export default Angelcard
