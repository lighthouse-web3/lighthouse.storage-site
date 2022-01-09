import { React, useState } from 'react'
import TypeAnimation from 'react-type-animation';

import './homepackage.css'

function Homepackage() {
    const [currentSelection, setSelection] = useState('install');

    return (
        <div className='section__padding homepackage_container' id="cli">
            <div className="homepackage_overlay"></div>
            <div className="title">
                <p className='gradient__text title__text'>Installing Our Package</p>

                <p className='description__text'>
                    Install and start using our package by running the following cli commands
                </p>

                <div className="button_container">
                    <button className={currentSelection === 'install' ? 'active' : ''} onClick={() => {
                        setSelection('install');
                    }}>Install</button>
                    <button className={currentSelection === 'wallet' ? 'active' : ''} onClick={() => {
                        setSelection('wallet');
                    }}>Wallet</button>
                    <button className={currentSelection === 'deploy' ? 'active' : ''} onClick={() => {
                        setSelection('deploy');
                    }}>Deploy</button>
                    <button className={currentSelection === 'status' ? 'active' : ''} onClick={() => {
                        setSelection('status');
                    }}>Status</button>
                </div>
                <div className='code_typing'>
                    $ &nbsp;
                    {
                        currentSelection === 'install' && (
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    'npm i -g lighthouse-web3',
                                    3000,
                                ]}
                                wrapper="a"
                                repeat={Infinity}
                            />

                        )
                    }
                    {
                        currentSelection === 'wallet' && (
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    'lighthouse-web3 create-wallet',
                                    1000, ''
                                ]}
                                wrapper="a"
                                repeat={Infinity}
                            />

                        )
                    }
                    {
                        currentSelection === 'deploy' && (
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    'lighthouse-web3 deploy <filename>',
                                    3000,
                                ]}
                                wrapper="a"
                                repeat={Infinity}
                            />

                        )
                    }
                    {
                        currentSelection === 'status' && (
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    'lighthouse-web3 status <CID>',
                                    3000,
                                ]}
                                wrapper="a"
                                repeat={Infinity}
                            />

                        )
                    }




                </div>
            </div>


            <div className="banner_Image">

                {
                    currentSelection === 'install' && (
                        <img src="/1-cli.png" alt="commandlineImage" />
                    )
                }
                {
                    currentSelection === 'wallet' && (
                        <img src="/2-cli.png" alt="commandlineImage" />
                    )
                }
                {
                    currentSelection === 'deploy' && (
                        <img src="/3-cli.png" alt="commandlineImage" />
                    )
                }
                {
                    currentSelection === 'status' && (
                        <img src="/4-cli.png" alt="commandlineImage" />
                    )
                }
            </div>


        </div>
    )
}

export default Homepackage
