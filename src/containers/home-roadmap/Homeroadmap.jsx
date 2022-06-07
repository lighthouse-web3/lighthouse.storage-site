import React from 'react'
import RoadmapQuaterMobile from '../../components/roadmap-quater-mobile/RoadmapQuaterMobile';
import Roadmapquater from '../../components/roadmap-quater/Roadmapquater'
import './homeroadmap.css'

function Homeroadmap() {
    const { innerWidth: width } = window;

    const roadmapData = [
        {
            quater: 'Q4-2021',
            milestone: '1',
            points: ['Launch Alpha - cli and npm package',
                'Get early users',
                ' Build community - twitter, telegram and discord'
            ],
            position: 'lower'
        },
        {
            quater: 'Q1-2022',
            milestone: '2',
            points: ['Testing',
                'Alpha Launch',
                'Tokenomics and white paper'
            ],
            position: 'upper'
        },
        {
            quater: 'Q2-2022',
            milestone: '3',
            points: [
                'Bootstrap endowment pool',
                'Security audit',
                'Protocol Deploy Mainnet',
                'Cosmos SDK for nodes'
            ],
            position: 'lower'
        },
        {
            quater: 'Q3-2022',
            milestone: '4',
            points: ['Ecosystem Development',
                'Infrastructure Decentralize',
                'compatibility to FVM',
                'Onboard useful public data',

            ],
            position: 'upper'
        },
        {
            quater: 'Q4-2022',
            milestone: '5',
            points: [
                ' NFT and storage DAO',
                'Prototype of privacy focussed zkp solutions to store files',
                'Token Launch (Tentative)'

            ],
            position: 'lower'
        }
    ];
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
