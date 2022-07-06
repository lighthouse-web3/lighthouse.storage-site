import React, { useRef } from 'react'
import { data } from '../../utils/Data/config';
import { sendEmail, validateEmail } from '../../utils/services/emailService'
import { notify } from '../../utils/services/notification'
import './HomeEmail.css'
const contentData = data['Home']['email'];
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
                    {contentData.title}
                </p>
                <div className="description__text section__padding">
                    <p dangerouslySetInnerHTML={{ __html: contentData.description }}>
                    </p>
                </div>
                <div className="description_email">
                    <input ref={mailInput} type="text" placeholder='Enter your Email' />
                    <button onClick={subscribeEmail}>{contentData.btnText}</button>
                </div>
            </div>




        </div>
    )
}

export default HomeEmail