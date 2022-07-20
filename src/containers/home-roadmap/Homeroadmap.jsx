import React from 'react'
import RoadmapQuaterMobile from '../../components/roadmap-quater-mobile/RoadmapQuaterMobile';
import Roadmapquater from '../../components/roadmap-quater/Roadmapquater'
import './homeroadmap.css'


function Homeroadmap({ contentData }) {
    const { innerWidth: width } = window;

    const roadmapData = contentData;
    return (
        <div className=' homeroadmap_container' id="roadmap">
            <div className="section__padding_x title">
                <p className='gradient__text title__text'>Roadmap</p>
            </div>

            {
                width > 900 &&
                <div className="roadmap_line_container">

                        <div className=" section__padding_x upper">
                            <div className="quater_container margin20" >
                                <Roadmapquater {...roadmapData[1]} />
                            </div>
                            <div className="quater_container margin20" >
                                <Roadmapquater {...roadmapData[3]} />
                            </div>
                        </div>

                        <div className="roadmap_line">
                        </div>

                        <div className=" section__padding_x lower">
                            <div className="quater_container">
                                <Roadmapquater {...roadmapData[0]} />
                            </div>
                            <div className="quater_container margin20" >
                                <Roadmapquater {...roadmapData[2]} />
                            </div>
                            <div className="quater_container margin20" >
                                <Roadmapquater {...roadmapData[4]} />
                            </div>
                        </div>


                    </div>
            }
            {

                width < 900 && (
                    <div className="section__padding_x">
                        <RoadmapQuaterMobile  {...{ data: roadmapData }} />
                    </div>
                )

            }



        </div>

    )
}

export default Homeroadmap
