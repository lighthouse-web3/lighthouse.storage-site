import React from 'react'
import { mediaUrl } from '../../utils/Data/config';
import './homebackedby.css'



function Homebackedby({ contentData }) {
    const organisationLogos = contentData.logos;
    return (
        <div className='section__padding home_backedby_container'>

            <div className="title">
                <p className='gradient__text title__text'>{contentData.title}</p>

                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData.description }}>
                </p>
            </div>

            <div className="logo_container">
                {organisationLogos.map((logo, index) =>
                    <img key={index} src={mediaUrl + logo} alt="" className='org_logo' />
                )}
            </div>

        </div>
    )
}

export default Homebackedby
