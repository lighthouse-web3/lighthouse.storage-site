import React from 'react'
import './roadmapquatermobile.css'
import { BsFillCircleFill } from 'react-icons/bs';

function RoadmapQuaterMobile(data) {
    const points = data['data']
    console.log(points)
    return (
        <div className='roadmap_mobile_container '>
            <table className='points_table'>
                {
                    points.map((point, index) =>
                        <tr key={index}>
                            <td className='line'>
                                <div className="pointer" >
                                    <BsFillCircleFill />
                                </div>
                            </td>
                            <td className='text'>
                                <span className={'gradient__text ' + (point.milestone === '2' ? 'current_milestone' : '')}>Milestone-{point.milestone}</span>&nbsp;
                                ({point.quater})
                                <table>
                                    {
                                        point.points.map(item => <tr className='points'>
                                            <td className='bullet'>-</td>
                                            <td>{item}</td>
                                        </tr>)
                                    }

                                </table>
                            </td>
                        </tr>
                    )
                }


            </table>

        </div>
    )
}

export default RoadmapQuaterMobile
