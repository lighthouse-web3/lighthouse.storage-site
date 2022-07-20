import React from 'react'
import { MdUpdate } from 'react-icons/md'
import './RecentBlogCard.scss'


function RecentBlogCard({ title, blogList }) {
    return (
        <div className="RecentBlogCard">
            <div className="RecentBlogCard__title">
                {title}
            </div>
            <div className="RecentBlogCard__listContainer">
                <div className="blogCard">
                    <p className="title">Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                    <p className="date">
                        <MdUpdate />
                        &nbsp;
                        7th July 2022</p>
                </div>
                <div className="blogCard">
                    <p className="title">Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
                    <p className="date">
                        <MdUpdate />
                        &nbsp;
                        7th July 2022</p>
                </div>
            </div>
        </div>
    )
}

export default RecentBlogCard