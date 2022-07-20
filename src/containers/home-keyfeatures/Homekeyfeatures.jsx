import React from 'react'
import { Featurepoint } from '../../components'
import './homekeyfeatures.css'


function Homekeyfeatures({ contentData }) {
    const features = contentData;

    return (
        <div className='section__padding homekeyfeatures_container' id="features">
            <div className="title">
                <p className='gradient__text title__text'>Key Features</p>

                {
                    features.map((point, arrIndex) => {
                        point['index'] = arrIndex;
                        return <Featurepoint key={arrIndex} {...point} />
                    })
                }


            </div>
        </div>
    )
}

export default Homekeyfeatures
