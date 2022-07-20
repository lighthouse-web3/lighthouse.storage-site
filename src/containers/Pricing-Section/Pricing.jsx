import React from 'react'
import { PriceCard } from '../../components'
import './Pricing.scss'

const prices = [
    {
        title: 'Package 1',
        price: '$20',
        description: 'The plans have following features',
        features: [
            {
                accept: true,
                title: 'feature 1'
            },
            {
                accept: true,
                title: 'feature 1'
            },
            {
                accept: true,
                title: 'feature 1'
            },
        ]
    },
    {
        title: 'Package 2',
        price: '$30',
        description: 'The plans have following features',
        features: [
            {
                accept: true,
                title: 'feature 1'
            },
            {
                accept: true,
                title: 'feature 1'
            },
            {
                accept: true,
                title: 'feature 1'
            },
        ]
    },
    {
        title: 'Package 3',
        price: '$40',
        description: 'The plans have following features',
        features: [
            {
                accept: true,
                title: 'feature 1'
            },
            {
                accept: true,
                title: 'feature 1'
            },
            {
                accept: true,
                title: 'feature 1'
            },
        ]
    },

]

function Pricing() {
    return (
        <div className="Pricing section__padding">
            <div className="title">
                <p className='gradient__text title__text'>{'Our Prices'}</p>

                <p className='description__text' dangerouslySetInnerHTML={{ __html: 'Choose the best price for your needs' }}>
                </p>
            </div>

            <div className="Pricing__container">


                {
                    prices.map((priceData) => <PriceCard data={priceData} />)
                }

            </div>
        </div>
    )
}

export default Pricing