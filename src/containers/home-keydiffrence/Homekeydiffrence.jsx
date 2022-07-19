import React from 'react'
import './homekeydiffrence.css'
import { BsFillCircleFill } from 'react-icons/bs'

function Homekeydiffrence({ contentData }) {

    const points = contentData;
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
                        points.map((point, index) =>
                            <tr key={index}>
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
