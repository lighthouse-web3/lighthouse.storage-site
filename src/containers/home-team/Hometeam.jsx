import React from 'react'
import './hometeam.css'
import { Teamcard } from '../../components'


function Hometeam({ contentData }) {
    const teamArr = contentData.members;
    return (
        <div className='section__padding hometeam_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>{contentData.title}</p>

                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData.description }}>
                </p>
            </div>

            <div className="team_members">
                {teamArr.map((member, index) =>
                    <Teamcard key={index} {...member} />
                )}
            </div>








        </div>
    )
}

export default Hometeam
