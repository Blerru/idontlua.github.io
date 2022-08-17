import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import emojify from "react-easy-emoji";
import "./postSection.scss";
import { timestampToRelative } from "../utils/timestampToRelative";
import BlogPostItem from "../components/BlogPostItem";

export default function PostsSection() {
    const [allPostsData, setAllPosts]: [any, any] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{title, slug, description, publishedAt, categories[]->{title, color}}`
            )
            .then((data) => {
                console.log(data);
                setAllPosts(data);
            })
            .catch(console.error);
    }, []);

    return (
        <section className="section post-section">
            <div className="blog-container">
                <h2 style={{ color: "var(--accent-color)" }}>Latest Posts</h2>
                <p>The place where I occasionally rant about certain things</p>
                <div className="posts-container">
                    {allPostsData &&
                        allPostsData.map((post: any, index: any) => (
                            <span key={index}>
                                <BlogPostItem
                                    title={post.title}
                                    description={post.description}
                                    slug={post.slug.current}
                                    publishedAt={Date.parse(post.publishedAt)}
                                    tags={post.categories}
                                />
                            </span>
                        ))}
                </div>
            </div>
        </section>
    );
}
