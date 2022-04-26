import React from 'react'
import './homebackedby.css'

function Homebackedby() {
    const organisationLogos = ['protocol_labs.png', 'long-hash-ventures.png', 'Big_Brain.png', 'Fenbushi_Capital.png', 'Formless.png', 'mask_network.svg', 'NGC.png', '2Link.jpg', 'hashcib.jpg']
    return (
        <div className='section__padding home_backedby_container'>

            <div className="title">
                <p className='gradient__text title__text'>Backed By</p>

                <p className='description__text'>
                    We are backed by some of the most prestegious organisations
                </p>
            </div>

            <div className="logo_container">
                {organisationLogos.map((logo) =>
                    <img src={'/BackedBy/' + logo} alt="" className='org_logo' />
                )}
            </div>

        </div>
    )
}

export default Homebackedby
