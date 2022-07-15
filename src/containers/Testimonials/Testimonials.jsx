import React from 'react'
import './Testimonials.scss'
import { GoQuote } from 'react-icons/go'
import { data } from '../../utils/Data/config';

const allTestimonails = [
    {
        testimonial: 'I am truly impressed by the efficiency of Referral Labs. The calls are answered immediately and arrangements made for the sample collection.',
        name: 'Sheila Shiva Rao',
    },
    {
        testimonial: 'Highly efficient service with timely collection, tests & report submissions.',
        name: 'Giridhara Chitrapadi',
    },
    {
        testimonial: 'Excellent service. Love how responsive and responsible they are.',

        name: 'Abhishek Shroff',
    }
]

const contentData = data['About']['angel'];

function Testimonials() {
    return (
        <div className="Testimonial section__padding">
            <div className="title">
                <p className='gradient__text title__text'>{'Testimonials'}</p>
                <p className='description__text'>

                </p>

            </div>
            <div className="Testimonial__Container container">
                {
                    allTestimonails.map((item, key) => <div className="box">
                        <div className="icon">
                            <GoQuote />
                        </div>
                        <p className="text">{item.testimonial}</p>
                        <div className="section">&nbsp;</div>
                        <p className="name gradient__text">{item.name}</p>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Testimonials