import React from 'react'
import './footer.css';
import { MdLocationOn, MdMailOutline } from 'react-icons/md'

import { FaGithubSquare, FaTwitterSquare, FaLinkedin, FaDiscord, FaTelegram } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { data } from '../../utils/Data/config';
const globalData = data['Global']
const socialData = data['SocialLinks']



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
                    <p>
                        <a onClick={() => { _navigate('/career') }} >Careers</a>
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
                        {globalData.address}
                    </p>
                </div>
                <div className="set">
                    <MdMailOutline className='icon' /> <p>
                        {globalData.email}
                    </p>
                </div>
                <div className="set">
                    <FaTwitterSquare className='icon social' onClick={() => window.open(socialData.tweeter, "_blank")} />
                    <FaGithubSquare className='icon social' onClick={() => window.open(socialData.github, "_blank")} />
                    <FaLinkedin className='icon social' onClick={() => window.open(socialData.linkedin, "_blank")} />
                    <FaDiscord className='icon social' onClick={() => window.open(socialData.discord, "_blank")} />
                    <FaTelegram className='icon social' onClick={() => window.open(socialData.telegram, "_blank")} />
                </div>
            </div>            
        </div>
    )
}

export default Footer
