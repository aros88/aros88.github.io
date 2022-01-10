import React from "react";
import Link from "next/link";

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
        <Link href={{ pathname: `/posts/${props.markdownFile}` }}>
          <h4>{props.title}</h4>
        </Link>
        <p>{props.description}</p>
        <Link href={{ pathname: `/posts/${props.markdownFile}` }}>
          <span>Read more...</span>
        </Link>
      </div>
    </div>
  );
};

export default PostsListItem;
