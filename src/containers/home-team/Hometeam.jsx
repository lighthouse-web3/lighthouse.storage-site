import React from 'react'
import './hometeam.css'
import { Teamcard } from '../../components'
import { data } from '../../utils/Data/config';
const contentData = data['About']['team'];

function Hometeam() {
    const teamArr = contentData.members;
    return (
        <div className='section__padding hometeam_container' id="team">
            <div className="title">
                <p className='gradient__text title__text'>{contentData.title}</p>

                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData.description }}>
                </p>
            </div>

            <div className="team_members">
                {teamArr.map((member) =>
                    <Teamcard {...member} />
                )}
            </div>








        </div>
    )
}

export default Hometeam
