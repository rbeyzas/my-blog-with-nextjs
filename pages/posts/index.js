import React from 'react';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

// const DUMMY_POSTS = [
//   {
//     slug: 'getting-started-with-nextjs',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs2',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs3',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2022-02-10',
//   },
//   {
//     slug: 'getting-started-with-nextjs4',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2022-02-10',
//   },
// ];
function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
