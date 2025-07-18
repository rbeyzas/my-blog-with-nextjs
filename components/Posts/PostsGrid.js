import React from 'react';
import PostsItem from './PostsItem';
import classes from './PostsGrid.module.css';

function PostsGrid(props) {
  const { posts } = props;

  if (!posts || !Array.isArray(posts)) {
    return <div>No posts available</div>;
  }

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostsItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
