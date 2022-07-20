import React from 'react'
import './Testimonials.scss'
import { GoQuote } from 'react-icons/go'
import { mediaUrl } from '../../utils/Data/config';


function Testimonials({ contentData }) {
    console.log(contentData);
    return (
        <div className="Testimonial section__padding">
            <div className="title">
                <p className='gradient__text title__text'>{contentData?.title}</p>
                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData?.description }}></p>

            </div>
            <div className="Testimonial__Container container">
                {
                    contentData?.testimonials?.map((item, key) => <div className="box">
                        <div className="icon">
                            <GoQuote />
                        </div>
                        <p className="text">{item.testimonial}</p>
                        <div className="section">&nbsp;</div>
                        <div className="imgContainer">
                            <img src={mediaUrl + item?.image} alt="" />
                        </div>
                        <p className="name gradient__text">{item.name}
                            <br />
                            <span className='designation'>
                                {item?.designation}
                            </span>
                        </p>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Testimonials