import React from "react";
import { RecentBlogCard } from "../../components";

const recentBlogs = (blogs) => {
    const sorter = (a, b) => {
        console.log(a, b);
        return (
            new Date(a?.attributes?.publishedAt).getTime() -
            new Date(b?.attributes?.publishedAt).getTime()
        );
    };
    let sortedBlogs = blogs.sort(sorter).reverse();
    return sortedBlogs.slice(0, 3);
};

const popularBlogs = (blogs) => {
    let popularBlogs = blogs.filter(
        (blog) => blog?.attributes?.otherInfo?.popular
    );
    return popularBlogs.slice(0, 3);
};

function BlogRecent({ allBlogs }) {
    return (
        <div className="BlogRecent">
            <RecentBlogCard title={"Recent Post"} blogs={recentBlogs(allBlogs)} />
            <RecentBlogCard title={"Popular Post"} blogs={popularBlogs(allBlogs)} />
        </div>
    );
}

export default BlogRecent;
