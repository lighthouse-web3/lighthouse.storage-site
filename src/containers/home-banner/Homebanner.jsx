import React from 'react'
import './homebanner.css'

function Homebanner() {
    return (
        <div className='section__padding banner_container' id="home">
            <div className="banner-overlay"></div>
            <div className="homebanner">
                <div className="title">
                    <p className='gradient__text title__text'>Permanent Storage Redefined</p>

                    <p className='description__text'>
                        Lighthouse allows users to store their files on decentralized network for lifetime at a fixed price
                    </p>

                    {/* <div className="description__emailText">Enter your Email to get update from lighthouse</div> */}

                    <div className="description_email">
                        <input type="text" placeholder='Enter your Email' />
                        <button>Get Updates</button>
                    </div>
                </div>
            </div>

            <div className="banner_Image">
                <img src="/world.png" alt="BannerImage" />
            </div>

        </div>
    )
}

export default Homebanner
