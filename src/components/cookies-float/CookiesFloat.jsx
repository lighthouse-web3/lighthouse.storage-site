import React from 'react'
import { useState } from 'react'
import './CookiesFloat.scss'

function CookiesFloat() {
    const [showCard, setShowCard] = useState(true);
    return (
        showCard &&
        <div className="CookieFloat">
            <div className="title" >
                <p>Cookie and Privacy</p>
            </div >
            <p className="content">We use cookies to personalize your experience. By continuing to visit this website you agree to our use of cookies.</p>
            <div className="button" onClick={() => { setShowCard(false) }}>
                Got it
            </div>
        </div>
    )
}

export default CookiesFloat