import React from 'react'
import { useNavigate } from 'react-router-dom';
import './BlogCard.scss'

function BlogCard({ blog, key }) {
    const _navigate = useNavigate();
    console.log(key, blog, 'key')
    return (
        <div className="BlogCard ptr" onClick={() => { _navigate(`/view-blog/${'1'}`) }}>
            <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" alt="blogImage" />

            <div className="contentContainer">
                <p className='title'>Blog title</p>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo sed blanditiis quam dolor adipisci ipsum laboriosam, id facilis ut quibusdam dolores incidunt eius! Ex soluta expedita tempora, fugiat quasi maiores numquam nobis velit quidem eveniet non magni neque, dolorem, ut adipisci! Impedit ratione odit labore voluptatibus porro recusandae ipsam.</p>
            </div>
        </div>
    )
}

export default BlogCard