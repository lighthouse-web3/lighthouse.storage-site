import React from 'react'
import { DiscordFloat } from '../../components'
import JobCard from '../../components/Job-card/JobCard'
import { Footer, Header } from '../../containers'
import './CareerPage.scss'

const JobPositions = [

    {
        title: 'Job Title 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, praesentium commodi blanditiis delectus quos ad, dolor eaque ab sequi fugit!'
    },
    {
        title: 'Job Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, praesentium commodi blanditiis delectus quos ad, dolor eaque ab sequi fugit!'
    },
    {
        title: 'Job Title 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, praesentium commodi blanditiis delectus quos ad, dolor eaque ab sequi fugit!'
    }
]

function CareerPage() {
    return (
        <div className="CareerPage">
            {/* <div className="bg_pattern2"></div> */}
            {/* <div className="bg_pattern3"></div>
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div> */}
            <Header />
            <div className="title">
                <p className='gradient__text title__text'>{'Careers'}</p>
                <p className='description__text'>
                </p>
            </div>

            <div className="CareerPage__cardContainer section__padding">

                {
                    JobPositions.map((job) => <JobCard data={job} />)
                }

            </div>
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default CareerPage