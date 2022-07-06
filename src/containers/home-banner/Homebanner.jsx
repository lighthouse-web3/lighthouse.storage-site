import React from 'react'
import { data } from '../../utils/Data/config'
import './homebanner.css'
const contentData = data['Home']['banner'];

function Homebanner() {
    return (
        <div className='section__padding banner_container' id="home">
            <div className="banner-overlay"></div>
            <div className="homebanner">
                <div className="title">
                    <p className='gradient__text title__text' dangerouslySetInnerHTML={{ __html: contentData['title'] }}></p>

                    <p className='description__text'
                        dangerouslySetInnerHTML={{ __html: contentData['description'] }}>
                    </p>
                </div>
            </div>

            <div className="banner_Image">
                <img src={contentData['image']} alt="BannerImage" />
            </div>

        </div>
    )
}

export default Homebanner
