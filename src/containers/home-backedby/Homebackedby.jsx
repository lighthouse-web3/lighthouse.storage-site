import React from 'react'
import './homebackedby.css'

function Homebackedby() {
    const organisationLogos = ['/protocol_labs.png', 'long-hash-ventures.png']
    return (
        <div className='section__padding home_backedby_container'>

            <div className="title">
                <p className='gradient__text title__text'>Backed By</p>

                <p className='description__text'>
                    
                </p>
            </div>

            <div className="logo_container">
                {organisationLogos.map((logo) =>
                    <img src={logo} alt="" className='org_logo' />
                )}
            </div>

        </div>
    )
}

export default Homebackedby
