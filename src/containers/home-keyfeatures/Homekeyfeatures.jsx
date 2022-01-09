import React from 'react'
import { Featurepoint } from '../../components'
import './homekeyfeatures.css'

function Homekeyfeatures() {
    const features = [
        {
            image: '/feature/feature (4).png',
            title: 'Pay once and store forever',
            content: ' Lighthouse runs a storage endowment pool whose job is to pay for the user files till perpetuity. This is of utmost priority for many applications, for example, NFT where many users are unaware of the fact that somebody has to pay for their NFTs over time which is generally a centralized mechanism and otherwise might lead to a broken NFT. '
        },
        {
            image: '/feature/feature (3).png',
            title: 'Compatibility with existing stack ',
            content: ' Lighthouse is built on existing open source technologies like IPFS, Filecoin which has ecosystem of 1000s of developers and will be easily be able to integrate Lighthouse into their current stack. '
        },
        {
            image: '/feature/feature (2).png',
            title: 'Cheaper than alternates',
            content: ' Being built on top of Filecoin, makes the Lighthouse storage much cheaper than existing alternates in the market.  '
        },
        {
            image: '/feature/feature (1).png',
            title: 'Distribute files globally',
            content: ' Provides the ability for users to replicate their files globally near to their users location leading to faster load times and censorship resistant'
        }
    ]
    return (
        <div className='section__padding homekeyfeatures_container' id="features">
            <div className="title">
                <p className='gradient__text title__text'>Key Features</p>

                {
                    features.map((point, arrIndex) => {
                        point['index'] = arrIndex;
                        return <Featurepoint {...point} />
                    })
                }


            </div>
        </div>
    )
}

export default Homekeyfeatures
