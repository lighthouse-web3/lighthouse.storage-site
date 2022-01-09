import React from 'react'
import './discordfloat.css'

import { FaDiscord } from 'react-icons/fa';

function DiscordFloat() {
    return (
        <div className='float__module' onClick={() => window.open('https://discord.com/invite/c4a4CGCdJG', "_blank")}>
            <div className="icon">
                <FaDiscord />
            </div>
            <div className="text">
                <p>Connect with us on discord</p>
            </div>
        </div>
    )
}

export default DiscordFloat
