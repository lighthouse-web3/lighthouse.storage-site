import React, { useRef } from 'react'
import { sendEmail, validateEmail } from '../../utils/services/emailService'
import { notify } from '../../utils/services/notification'
import './HomeEmail.css'

function HomeEmail() {
    const mailInput = useRef()
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
        <div className='HomeEmail_container '>
            <div className="title section__padding">
                <p className='gradient__text title__text'>
                    Get in touch
                </p>
                <div className="description__text section__padding">
                    <p>Weather you have a question about features, trials, pricing, demo or anything else. <br /> Please let us know Email ID. Our Team will contact you soon</p>
                </div>
                <div className="description_email">
                    <input ref={mailInput} type="text" placeholder='Enter your Email' />
                    <button onClick={subscribeEmail}>Contact Me</button>
                </div>
            </div>




        </div>
    )
}

export default HomeEmail