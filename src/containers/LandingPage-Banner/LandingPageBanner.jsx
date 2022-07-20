import React from 'react';
import './LandingPageBanner.css';

function LandingPageBanner() {
    return (
        <div className="LandingPageBanner section__padding">
            <div className="titleContainer">
                <div className="headingContainer">
                    <p className="gradient__text title__text">
                        Discover
                        & Store Rare
                        NFTs Forever
                    </p>
                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nemo. Repellat commodi ipsum officia iste quas facere inventore qui distinctio.</p>
                    <button className="btn knowMore">
                        Know More
                    </button>
                </div>
                <div className="imageContainer">
                    <img src="/illustrations/nft.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LandingPageBanner