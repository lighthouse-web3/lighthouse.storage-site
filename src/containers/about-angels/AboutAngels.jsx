import React from 'react'
import './AboutAngels.css'
import Angelcard from '../../components/angel-card/AngelCard'


function AboutAngels({ contentData }) {
    const teamArr = contentData.angels;
    return (
        <div className='section__padding angels_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>{contentData.title}</p>
                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData.description }}>
                </p>
            </div>

            <div className="angels">

                <div className="team_members">
                    {teamArr.map((member, index) =>
                        <Angelcard key={index} {...member} />
                    )}
                </div>
            </div>


        </div>
    )
}

export default AboutAngels
