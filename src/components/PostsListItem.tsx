import React from "react";
import { Link } from "react-router-dom";
import "../css/posts-list-item.css";

interface PostsListItemProps {
  title: string;
  description: string;
  markdownFile: string;
}

const PostsListItem: React.FC<PostsListItemProps> = (
  props: PostsListItemProps
) => {
  return (
    <div className="posts-list-item">
      <div className="posts-list-item-card">
        <Link to={{ pathname: `/post/${props.markdownFile}` }}>
          <h4>{props.title}</h4>
        </Link>
        <p>{props.description}</p>
        <Link to={{ pathname: `/post/${props.markdownFile}` }}>
          <span>Read more...</span>
        </Link>
      </div>
    </div>
  );
};

export default PostsListItem;
