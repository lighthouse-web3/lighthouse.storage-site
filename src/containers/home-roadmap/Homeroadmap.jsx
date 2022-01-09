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
                'Beta Launch',
                'Tokenomics and white paper',
                'Onboard node runners'
            ],
            position: 'upper'
        },
        {
            quater: 'Q2-2022',
            milestone: '3',
            points: ['Token launch ',
                'Bootstrap endowment pool',
                'Security audit',
                'Main smart contracts on polygon chain',
                'Python and golang dev kit for users'
            ],
            position: 'lower'
        },
        {
            quater: 'Q3-2022',
            milestone: '4',
            points: ['Ecosystem Development',
                'Promoting grants and hackathons to build on Lighthouse',
                'compatibility to FVM',
                'Onboard useful public data',
                'Prototype of multi chain compatibility like solana, ICP'
            ],
            position: 'upper'
        },
        {
            quater: 'Q4-2022',
            milestone: '5',
            points: [
                ' NFT and storage DAO',
                'Prototype of privacy focussed zkp solutions to store files',
                'Filecoin Miners directly claim deals from Lighthouse smart contract'

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
