import React, { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/HomePage/Hero';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;
