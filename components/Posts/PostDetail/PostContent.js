import React from 'react';
import PostHeader from './PostHeader';
import classes from './PostContent.module.css';

function PostContent(props) {
  const { post } = props;

  // Post prop'unun var olup olmadığını kontrol et
  if (!post) {
    return <div>Post not found</div>;
  }

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default PostContent;
