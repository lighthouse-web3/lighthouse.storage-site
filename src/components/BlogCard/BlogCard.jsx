import React from 'react'
import { useNavigate } from 'react-router-dom';
import { mediaUrl } from '../../utils/Data/config';
import './BlogCard.scss'

function BlogCard({ blog }) {
    const _navigate = useNavigate();
    return (
        <div className="BlogCard ptr" onClick={() => { window.open(`/view-blog/${blog?.id}/${blog?.attributes?.title?.replaceAll(' ', '-')}`, '_blank') }}>
            <img src={mediaUrl + blog?.attributes?.coverImage?.data?.attributes?.url} alt={''} />

            <div className="contentContainer">
                <p className='title'>{blog?.attributes?.title}</p>
                <p className='description'>{blog?.attributes?.description}</p>
            </div>
        </div>
    )
}

export default BlogCard