import React, { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/HomePage/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800, // Revalidate every 30 minutes
  };
}
export default HomePage;
