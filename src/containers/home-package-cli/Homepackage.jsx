import { React, useState } from 'react'
import TypeAnimation from 'react-type-animation';
import { mediaUrl } from '../../utils/Data/config';
import './homepackage.css'

function Homepackage({ contentData }) {
    const [currentSelection, setSelection] = useState('install');
    return (
        <div className='section__padding homepackage_container' id="cli">
            <div className="homepackage_overlay"></div>
            <div className="title">
                <p className='gradient__text title__text' dangerouslySetInnerHTML={{ __html: contentData.title }}></p>

                <p className='description__text' dangerouslySetInnerHTML={{ __html: contentData.description }}>
                </p>

                <div className="button_container">
                    {
                        contentData?.commands.map((item, index) => <button className={currentSelection === item.section ? 'active' : ''}
                            key={index}
                            onClick={() => {
                                setSelection(item.section);
                            }}>{item.section}</button>)
                    }
                </div>
                <div className='code_typing'>
                    $ &nbsp;
                    {
                        contentData?.commands.map((item, index) => {
                            return currentSelection === item.section && (
                                <TypeAnimation
                                    key={index}
                                    cursor={true}
                                    sequence={[
                                        item.command,
                                        3000,
                                    ]}
                                    wrapper="a"
                                    repeat={Infinity}
                                />

                            )
                        })

                    }
                </div>
            </div>


            <div className="banner_Image">

                {
                    contentData?.commands.map((item, index) => currentSelection === item.section && (
                        <img src={mediaUrl + item.image} key={index} alt="commandlineImage" />
                    ))
                }
            </div>


        </div>
    )
}

export default Homepackage
