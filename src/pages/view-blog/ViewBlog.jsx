import React from 'react'
import { MdUpdate, MdArrowBackIosNew, MdOutlineShare, MdOutlineContentCopy, MdSupervisedUserCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { DiscordFloat, RecentBlogCard } from '../../components'
import { Footer, Header } from '../../containers'
import './ViewBlog.scss'


const recentBlogs = [
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
    },
    {
        title: 'How to store data on IPFS',
        image: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
        date: '8th July 2022',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sunt molestias inventore nobis similique esse earum vero recusandae! Esse impedit laborum ipsum voluptatem earum temporibus perspiciatis dolore nobis, cumque at soluta accusamus maiores dolor veritatis magni ipsa quam rerum? Minima aspernatur mollitia debitis unde repudiandae tenetur tempora, autem nemo ab.'
    },
]

function ViewBlog() {
    const _navigate = useNavigate();
    return (
        <div className="viewBlog">
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div>
            <Header />
            <div className="viewBlog__title">

                <p className='icon ptr' onClick={() => { _navigate(`/blogs`) }} >
                    <MdArrowBackIosNew />
                </p>


                <p className='gradient__text'>
                    View Blogs
                </p>
            </div>
            <div className="viewBlog__container section__padding">
                <div className="recent">
                    <RecentBlogCard title={'Similar Blogs'} blogs={recentBlogs} />
                </div>
                <div className="blogBox">
                    <div className="card">
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_start_a_career_in_blockchain_technology.jpg" alt="" />
                        <p className="title">
                            Benifits of blockchain
                        </p>

                        <div className="infobar">
                            <span className="date"> <MdUpdate />
                                &nbsp;
                                7th July 2022
                            </span>

                            <div className='share'>
                                <span>
                                    <MdOutlineContentCopy />
                                    Copy
                                </span>
                                <span>
                                    <MdOutlineShare />
                                    Share
                                </span>

                            </div>

                        </div>

                        <div className='content'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum totam ab doloribus atque veniam molestias libero ratione corrupti dolore?
                        </div>

                        <div className="author">
                            <MdSupervisedUserCircle />
                            &nbsp;
                            {'Author'}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default ViewBlog