import React from 'react'
import { mediaUrl } from '../../utils/Data/config';
import './featurepoint.css'

function featurepoint({ image, title, content, index }) {
    const { innerWidth: width } = window;

    return (
        <div className={`featurepoint_container  ${(index % 2 === 0) ? 'container_row' : 'container_row-reverse'}`} >
            <div className="image_container">
                <img src={mediaUrl + image} alt="feature_image" />
            </div>
            <div className="text_container"  >
                <div className="title" style={
                    (width > 800) ? ((index % 2 === 0) ? { textAlign: 'right' } : { textAlign: 'left' }) :
                        { textAlign: 'center' }
                }>{title}</div>
                <div className="description" style={(width > 800) ? ((index % 2 === 0) ? { textAlign: 'right' } : { textAlign: 'left' }) :
                    { textAlign: 'center' }}>{content}</div>
            </div>
        </ div >
    )
}

export default featurepoint
