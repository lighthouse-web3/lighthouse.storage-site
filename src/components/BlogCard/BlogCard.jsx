import React from 'react'
import './BlogCard.scss'

function BlogCard({ blog }) {
    console.log(blog);
    return (
        <div className="BlogCard">
            <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" alt="blogImage" />

            <div className="contentContainer">
                <p className='title'>Blog title</p>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo sed blanditiis quam dolor adipisci ipsum laboriosam, id facilis ut quibusdam dolores incidunt eius! Ex soluta expedita tempora, fugiat quasi maiores numquam nobis velit quidem eveniet non magni neque, dolorem, ut adipisci! Impedit ratione odit labore voluptatibus porro recusandae ipsam.</p>
                <div className="readMore ptr">Read More..</div>
            </div>
        </div>
    )
}

export default BlogCard