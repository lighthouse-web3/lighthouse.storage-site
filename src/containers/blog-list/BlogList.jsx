import React from 'react'
import { useState } from 'react';
import { BlogCard, Pagination } from '../../components';
import './BlogList.scss'

const Blogs = [
    {
        title: 'How to store data on IPFS',
        image: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
        date: '8th July 2022',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sunt molestias inventore nobis similique esse earum vero recusandae! Esse impedit laborum ipsum voluptatem earum temporibus perspiciatis dolore nobis, cumque at soluta accusamus maiores dolor veritatis magni ipsa quam rerum? Minima aspernatur mollitia debitis unde repudiandae tenetur tempora, autem nemo ab.'
    },
    {
        title: 'How to store data on IPFS',
        image: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
        date: '8th July 2022',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sunt molestias inventore nobis similique esse earum vero recusandae! Esse impedit laborum ipsum voluptatem earum temporibus perspiciatis dolore nobis, cumque at soluta accusamus maiores dolor veritatis magni ipsa quam rerum? Minima aspernatur mollitia debitis unde repudiandae tenetur tempora, autem nemo ab.'
    },
    {
        title: 'How to store data on IPFS',
        image: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
        date: '8th July 2022',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sunt molestias inventore nobis similique esse earum vero recusandae! Esse impedit laborum ipsum voluptatem earum temporibus perspiciatis dolore nobis, cumque at soluta accusamus maiores dolor veritatis magni ipsa quam rerum? Minima aspernatur mollitia debitis unde repudiandae tenetur tempora, autem nemo ab.'
    },
    {
        title: 'How to store data on IPFS',
        image: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
        date: '8th July 2022',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sunt molestias inventore nobis similique esse earum vero recusandae! Esse impedit laborum ipsum voluptatem earum temporibus perspiciatis dolore nobis, cumque at soluta accusamus maiores dolor veritatis magni ipsa quam rerum? Minima aspernatur mollitia debitis unde repudiandae tenetur tempora, autem nemo ab.'
    }
]

function BlogList() {
    const [currentBlogs, setCurrentBlog] = useState([]);
    const [allBlogs, setAllBlogs] = useState(Blogs);

    return (
        <>
            {
                console.log(currentBlogs, 'currentBlog')
            }
        <div className="BlogList">
            {
                    currentBlogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
            }
        </div>
            <Pagination setCurrentData={setCurrentBlog} itemsPerPage={6} orignalData={allBlogs} />

        </>


    )
}

export default BlogList