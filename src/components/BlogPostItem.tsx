import { timestampToRelative } from "../utils/timestampToRelative";
import emojify from "react-easy-emoji";
import { Link } from "react-router-dom";

interface IItemProps {
    title: string;
    description: string;
    tags: { color: any; title: string }[];
    publishedAt: number;
    slug: string;
}

export default function BlogPostItem(props: IItemProps) {
    return (
        <div className="blog-post">
            <small className="post-information">
                <b style={{ color: "var(--text-lighter)" }}>
                    {timestampToRelative(props.publishedAt)}
                </b>
            </small>

            <Link to={"/" + props.slug} key={props.slug}>
                <h4 style={{ color: "var(--text-link)" }}>{emojify(props.title)}</h4>{" "}
            </Link>

            <h5>{props.description}</h5>
        </div>
    );
}
