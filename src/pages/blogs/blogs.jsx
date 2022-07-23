import axios from "axios";
import React, { useEffect, useState } from "react";
import { DiscordFloat } from "../../components";
import { Footer, Header } from "../../containers";
import BlogList from "../../containers/blog-list/BlogList";
import BlogRecent from "../../containers/blog-recent/BlogRecent";
import { baseUrl } from "../../utils/Data/config";
import "./blogs.scss";




function Blogs() {
    const [allBlogs, setAllBlogs] = useState(null);
    const [showPage, setShowPage] = useState(false);
    useEffect(() => {
        (async () => {
            try {

                const res = await axios.get(`${baseUrl}/blogs?populate=*`);
                res["status"] === 200 &&
                    setAllBlogs(res["data"]?.["data"]);

                setShowPage(true);
            } catch (error) { }
        })();
    }, []);
    return (
        <div className="Blogs">
            {showPage && (
                <>
                    <div className="bg_pattern2"></div>
                    <div className="bg_pattern4"></div>
                    <div className="bg_pattern5"></div>
                    <Header />
                    <div className="Blogs__title">
                        <p className="gradient__text">Blogs</p>
                    </div>
                    <div className="Blogs__container section__padding">
                        <div className="recent">
                            <BlogRecent allBlogs={allBlogs} />
                        </div>
                        <div className="list">
                            <BlogList allBlogs={allBlogs} />
                        </div>
                    </div>
                    <Footer />
                    <DiscordFloat />
                </>
            )}
        </div>
    );
}

export default Blogs;
