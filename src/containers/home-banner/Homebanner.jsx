import React, { useRef, useState } from 'react'
import { sendEmail, validateEmail } from '../../utils/services/emailService'
import { notify } from '../../utils/services/notification'
import './homebanner.css'

function Homebanner() {

    const mailInput = useRef()
    // const [isInvalidEmail, setInvalidEmail] = useState(false)
    const subscribeEmail = () => {
        let userEmail = mailInput?.current?.value || null
        console.log(userEmail)

        if (
            validateEmail(userEmail)
        ) {
            sendEmail(userEmail).then((res) => {
                mailInput.current.value = '';
            })
        } else {
            notify('Please Enter a valid Email', 'error')
        }

    }
    return (
        <div className='section__padding banner_container' id="home">
            <div className="banner-overlay"></div>
            <div className="homebanner">
                <div className="title">
                    <p className='gradient__text title__text'>A New Way To <br /> Store Files Permanently</p>

                    <p className='description__text'>
                        Lighthouse allows users to store their files on decentralized network for lifetime at a fixed price
                    </p>

                    {/* <div className="description__emailText">Enter your Email to get update from lighthouse</div> */}

                    <div className="description_email">
                        <input ref={mailInput} type="text" placeholder='Enter your Email' />
                        <button onClick={subscribeEmail}>Get Updates</button>
                    </div>
                </div>
            </div>

            <div className="banner_Image">
                <img src="/world.png" alt="BannerImage" />
            </div>
            {/* sss */}
        </div>
    )
}

export default Homebanner
