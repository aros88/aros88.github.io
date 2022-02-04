import React from "react";
import Link from "next/link";

interface PostsListItemProps {
  title: string;
  description: string;
  markdownFile: string;
  image: string;
}

const PostsListItem: React.FC<PostsListItemProps> = (
  props: PostsListItemProps
) => {
  return (
    <div className="posts-list-item">
      <div className="posts-list-item-card">
        <div className="posts-list-item-image">
          <Link href={{ pathname: `/posts/${props.markdownFile}` }}>
            <img src={props.image} alt="post-image" />
          </Link>
        </div>
        <div className="posts-list-item-content">
          <Link href={{ pathname: `/posts/${props.markdownFile}` }}>
            <h4>{props.title}</h4>
          </Link>
          <p>{props.description}</p>
          <Link href={{ pathname: `/posts/${props.markdownFile}` }}>
            <span>Read more...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostsListItem;
