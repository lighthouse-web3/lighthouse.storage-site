import React from 'react'
import './footer.css';
import { MdLocationOn, MdMailOutline } from 'react-icons/md'

import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer-container section__padding'>
            <div className="site-details">
                <div className="site_map">
                    <p className='f_title'>Sitemap</p>
                    <p>
                        <a href="#home">Home</a>
                    </p>
                    <p>
                        <a href="#cli">CLI</a>
                    </p>
                    <p>
                        <a href="#features">Features</a>
                    </p>
                    <p>
                        <a href="#team">Team</a>
                    </p>
                </div>
                <div className="policies">
                    <p className='f_title'>Policies</p>
                    <p>T&C</p>
                    <p>Copyright</p>
                </div>
            </div>
            <div className="contact-details">
                <div className="set">
                    <MdLocationOn className='icon' /> <p>
                        Lighthouse - Singapore
                    </p>
                </div>
                <div className="set">
                    <MdMailOutline className='icon' /> <p>
                        nandit@Lighthouse.storage
                    </p>
                </div>
                <div className="set">
                    <FaTwitterSquare className='icon social' onClick={() => window.open('https://twitter.com/LighthouseWeb3', "_blank")} />
                    <FaGithubSquare className='icon social' onClick={() => window.open('https://github.com/lighthouseweb3', "_blank")} />
                </div>
            </div>            
        </div>
    )
}

export default Footer
