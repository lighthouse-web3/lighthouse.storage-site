import React from 'react'
import { data } from '../../utils/Data/config';
import './homebackedby.css'

const contentData = data['About']['backedBy'];

function Homebackedby() {
    const organisationLogos = contentData.logos;
    return (
        <div className='section__padding home_backedby_container'>

            <div className="title">
                <p className='gradient__text title__text'>{contentData.title}</p>

                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData.description }}>
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
