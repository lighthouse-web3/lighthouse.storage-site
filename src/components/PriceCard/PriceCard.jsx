import React from 'react'
import './PriceCard.scss'
import { MdDone, MdClose } from 'react-icons/md'


function PriceCard({ data }) {
    console.log(data);
    return (
        <div className="PriceCard">
            <div className="PriceCard__title">
                <p className='m-0'>{data.title}</p>
                <p className='m-0'>
                    {/* <span className="oldPrice">₹10999</span> */}
                    <span className="newPrice gradient__text">{data.price}</span>
                </p>
            </div>

            <div className="PriceCard__subtitle">
                <div className="line"></div>
                <div className="content"></div>
            </div>

            <div className="PriceCard__description">
                <p>{data.description}</p>
            </div>

            <hr />

            <div className="PriceCard__features">
                {
                    data.features.map((item, key) =>
                        <div key={key} className={item.accept ? 'feature' : 'feature notavailable'}>
                            <div className="icon">
                                {
                                    item.accept ? <MdDone /> : <MdClose />
                                }
                            </div>
                            <p className='m-0'>{item.title}</p>
                        </div>
                    )
                }


            </div>

            <div className="PriceCard__button">
                <a href="https://pages.razorpay.com/mynanocard" target={'_self'} >
                    Subscribe Now
                </a>
            </div>

        </div>
    )
}

export default PriceCard