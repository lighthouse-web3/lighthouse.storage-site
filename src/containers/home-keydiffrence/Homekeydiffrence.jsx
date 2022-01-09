import React from 'react'
import './homekeydiffrence.css'
import { BsFillCircleFill } from 'react-icons/bs'

function Homekeydiffrence() {

    const points = [
        'Pay once and store forever cost model is a pretty new storage cost model which is different from existing protocols.',
        'Our mechanism involves staking, accruing fees and interest on the storage cost paid by the user which overall leads to a lower fee than the current alternative like arweave.',
        'Smart contracts run on popular chains like polygon, ethereum, etc. hence direct integration with existing dapps of these ecosystems.',
        'IPFS and Filecoin are the popular blockchain storage protocols and hence Lighthouse will be very compatible with existing stack for projects to migrate to.'
    ]
    return (
        <div className='keyDifference_container '>
            <div className="title section__padding">
                <p className='gradient__text title__text'>How are we different from existing storage systems?</p>
            </div>

            <div className="bannerImage_container">
                <img src="/bankImage.png" alt="" className="bannerImage" />
                <div className="overlay"></div>
            </div>

            <div className="section__padding table_container">
                <div className="overlay2"></div>
                <table className='points_table'>
                    {
                        points.map(point =>
                            <tr>
                                <td className='line'>
                                    <div className="pointer">
                                        <BsFillCircleFill />
                                    </div>
                                </td>
                                <td className='text'>{point}</td>
                            </tr>
                        )
                    }


                </table>


            </div>




        </div>
    )
}

export default Homekeydiffrence
