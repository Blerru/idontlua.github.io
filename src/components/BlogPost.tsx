import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeBlock from "../blogComponents/CodeBlock";
import sanityClient from "../client";
import { PortableText } from "@portabletext/react";
import emojify from "react-easy-emoji";
import imageUrlBuilder from "@sanity/image-url";
import "./blogPost.scss";

const imageBuilder = imageUrlBuilder(sanityClient);

const blogPortableComponents = {
    types: {
        code: ({ value }: any) => <CodeBlock language={value.language} code={value.code} />,
        image: ({ value }: any) =>
            value.asset ? (
                <img className="content-image" src={imageBuilder.image(value.asset).url()} />
            ) : null,
    },
};

export default function BlogPost() {
    const [postData, setPostData]: [any, any] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $slug]{
          title,
          description,
          slug,
          categories[]->{title, color},
          body,
          publishedAt
       }`,
                { slug }
            )
            .then((data) => setPostData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!postData) return <div>Loading...</div>;

    const tagsElement = postData.categories.map((category: any) => (
        <span key={category.title} style={{ color: category.color.hex }}>
            ● {category.title}
        </span>
    ));

    const publishString = new Date(Date.parse(postData.publishedAt)).toLocaleDateString(
        "en-US"
    );

    return (
        <div className="blog-wrapper">
            <div className="post">
                <h1 className="post-title">{emojify(postData.title)}</h1>
                <p className="post-description"> {emojify(postData.description)} </p>
                <div className="extra-information-container">
                    <div className="tags"> {tagsElement} </div>
                    <span className="publish-date"> {publishString} </span>
                </div>
                <div className="separator" />
            </div>
            <div className="blog-content">
                <PortableText components={blogPortableComponents} value={postData.body} />
            </div>
        </div>
    );
}
