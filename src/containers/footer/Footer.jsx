import React from 'react'
import './footer.css';
import { MdLocationOn, MdMailOutline } from 'react-icons/md'

import { FaGithubSquare, FaTwitterSquare, FaLinkedin, FaDiscord, FaTelegram } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


function Footer() {
    const _navigate = useNavigate();
    return (
        <div className='footer-container section__padding'>
            <div className="site-details">
                <div className="site_map">
                    <p className='f_title'>Sitemap</p>
                    <p>
                        <a onClick={() => { _navigate('/') }} >Home</a>
                    </p>
                    <p>
                        <a onClick={() => { _navigate('/about-us') }} >About us</a>
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
                    <FaLinkedin className='icon social' onClick={() => window.open('https://www.linkedin.com/company/lighthouse-web3', "_blank")} />
                    <FaDiscord className='icon social' onClick={() => window.open('https://discord.com/invite/c4a4CGCdJG', "_blank")} />
                    <FaTelegram className='icon social' onClick={() => window.open('https://t.me/lighthouseStorage', "_blank")} />
                </div>
            </div>            
        </div>
    )
}

export default Footer
