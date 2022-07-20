import React from 'react'
import './JobCard.scss'

function JobCard({ data }) {
    return (
        <div className="JobCard">
            <div className="JobCard__title" >
                <p>{data.title}</p>
                {/* <div className="button">
                    Apply Now
                </div> */}
            </div >
            <p className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nemo quos inventore, voluptas, perferendis impedit, repellat placeat velit quod ipsam sequi rerum accusantium dolore officia! Veniam praesentium quae tempore molestiae numquam dolore tempora dolor quis consequatur repudiandae, accusamus recusandae quisquam.
            </p>

            <div className="button">
                Apply Now
            </div>

        </div>
    )
}

export default JobCard