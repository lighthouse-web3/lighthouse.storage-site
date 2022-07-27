import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    MdUpdate,
    MdArrowBackIosNew,
    MdOutlineShare,
    MdOutlineContentCopy,
    MdSupervisedUserCircle,
} from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { DiscordFloat, RecentBlogCard } from "../../components";
import { Footer, Header } from "../../containers";
import { baseUrl, mediaUrl } from "../../utils/Data/config";
import "./ViewBlog.scss";
import ReactMarkdown from "react-markdown";
import { notify } from '../../utils/services/notification'
import { Helmet } from "react-helmet";




const getBlogByID = async (blogs, id, navigate, setShowBlog) => {
    let blog = blogs.filter((blog) => blog?.id === +id);
    console.log(blog, 'selected Blog');
    if (blog.length > 0) {
        setShowBlog(blog[0]);
    } else {
        navigate('/blogs')
    }
}

const getSimilarBlogs = (currentBlog, blogs, setSimilarBlogs) => {
    console.log('currentBlog', currentBlog);
    console.log('blogs', blogs);

    let similarBlogs = blogs.filter((blog) => {
        return blog?.attributes?.otherInfo?.category === currentBlog?.attributes?.otherInfo?.category;
    })

    console.log(similarBlogs, 'Similar Blogs')

    similarBlogs.length > 0 && setSimilarBlogs(similarBlogs);
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    notify('Link Copied', 'success')
}

function ViewBlog() {
    const _navigate = useNavigate();
    let { id } = useParams();
    const [allBlogs, setAllBlogs] = useState(null);
    const [showBlog, setShowBlog] = useState(null);
    const [similarBlogs, setSimilarBlogs] = useState([]);
    const [showPage, setShowPage] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`${baseUrl}/blogs?populate=*`);
                res["status"] === 200 && setAllBlogs(res["data"]?.["data"]);
                getBlogByID(res["data"]?.["data"], id, _navigate, setShowBlog);
                // getSimilarBlogs(showBlog, allBlogs, setSimilarBlogs)
                setShowPage(true);
            } catch (error) { }
        })();
    }, [id]);

    useEffect(() => {
        showBlog && getSimilarBlogs(showBlog, allBlogs, setSimilarBlogs);
    }, [showBlog])

    return (
        <div className="viewBlog">
            {showPage &&
                <>
                <Helmet>
                    <meta property="og:url" content="https://www.lighthouse.storage/" />
                    <meta property="og:title" content="Lighthouse" />
                    <meta
                        property="og:description"
                        content="Permanent Storage Redefined | store files on decentralized network for lifetime at a fixed price"
                    />
                    <meta property="og:image" content="https://www.lighthouse.storage/logo.png" />

                </Helmet>
                <div className="bg_pattern4"></div>
                <div className="bg_pattern5"></div>
                <Header />
                <div className="viewBlog__title">
                    <p
                        className="icon ptr"
                        onClick={() => {
                            _navigate(`/blogs`);
                        }}
                    >
                        <MdArrowBackIosNew />
                    </p>

                    <p className="gradient__text">View Blogs</p>
                </div>
                <div className="viewBlog__container section__padding">
                    <div className="recent">
                        {
                            similarBlogs && <RecentBlogCard title={"Similar Blogs"} blogs={similarBlogs} />
                        }

                    </div>
                    {
                        showBlog && <div className="blogBox">
                            <div className="card">
                                <img
                                    src={mediaUrl + showBlog?.attributes?.coverImage?.data?.attributes?.url}
                                    alt=""
                                />
                                <p className="title">{showBlog?.attributes?.title}</p>

                                <div className="infobar">
                                    <span className="date">
                                        {" "}
                                        <MdUpdate />
                                        &nbsp; {showBlog?.attributes?.publishedAt?.split('T')[0]}
                                    </span>

                                    <div className="share">
                                        <span onClick={() => { copyToClipboard() }}>
                                            <MdOutlineContentCopy />
                                            Copy
                                        </span>
                                        {/* <span>
                                            <MdOutlineShare />
                                            Share
                                        </span> */}
                                    </div>
                                </div>

                                <div className="content">
                                    <ReactMarkdown children={showBlog?.attributes?.description?.replaceAll('/uploads/', `${mediaUrl}/uploads/`)} />
                                </div>

                                <div className="author">
                                    <MdSupervisedUserCircle />
                                    &nbsp;
                                    {showBlog?.attributes?.author}
                                </div>
                            </div>
                        </div>
                    }

                </div>
                <Footer />
                <DiscordFloat />
                </>
            }
        </div>
    );
}

export default ViewBlog;
