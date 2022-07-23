import React from 'react'
import { useState } from 'react';
import { BlogCard, Pagination } from '../../components';
import './BlogList.scss'



function BlogList({ allBlogs }) {
    const [currentBlogs, setCurrentBlog] = useState(allBlogs);

    return (
        <>
        <div className="BlogList">
                {
                    currentBlogs.map((blog, index) => <BlogCard blog={blog} />)
            }
        </div>
            <Pagination setCurrentData={setCurrentBlog} itemsPerPage={6} data={allBlogs} />

        </>


    )
}

export default BlogList