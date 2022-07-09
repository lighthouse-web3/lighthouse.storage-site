import React from 'react';
import { DiscordFloat } from '../../components';
import { Footer, Header } from '../../containers';
import BlogList from '../../containers/blog-list/BlogList';
import BlogRecent from '../../containers/blog-recent/BlogRecent';
import './blogs.scss';

function Blogs() {
    return (
        <div className="Blogs">
            <div className="bg_pattern2"></div>
            {/* <div className="bg_pattern3"></div> */}
            <div className="bg_pattern4"></div>
            <div className="bg_pattern5"></div>
            <Header />
            <div className="Blogs__title">
                <p className='gradient__text'>
                    Blogs
                </p>
            </div>
            <div className="Blogs__container section__padding">
                <div className="recent">
                    <BlogRecent />
                </div>
                <div className="list">
                    <BlogList />
                </div>
            </div>
            <Footer />
            <DiscordFloat />
        </div>
    )
}

export default Blogs