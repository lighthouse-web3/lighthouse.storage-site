import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import './LandingPagePoints.css'


function LandingPagePoints() {
    const points = [
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illum?',
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illum?',
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, illum?'
    ]
    return (
        <div className="LandingPagePoints section__padding">
            <div className="pointsContainer">
                <p className="title title__text gradient__text">Benifits Points</p>
                <div className="pointBox">
                    <table>
                        <tbody>
                            {
                                points.map((point, key) => <tr key={key}>
                                    <td className='icon'>
                                        <BsCheckCircleFill />
                                    </td>
                                    <td>{point}</td>
                                </tr>)
                            }

                        </tbody>

                    </table>

                </div>
            </div>
            <div className="imageContainer">
                <img src="/illustrations/hero.png" alt="" />
            </div>
        </div>
    )
}

export default LandingPagePoints