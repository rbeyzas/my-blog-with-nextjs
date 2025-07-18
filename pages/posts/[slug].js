import React from 'react';
import PostContent from '../../components/Posts/PostDetail/PostContent';
import { getPostData, getAllPosts } from '../../lib/posts-util';

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export async function getStaticProps(context) {
  // getStaticProps derleme işlemi sırasında ya da serverda çalışır. clientta çalışmaz.
  const { params } = context; // context tüm dinamik parametreleri içerir. params içerisinden slug değerini alırız.
  const { slug } = params;
  const postData = getPostData(`${slug}.md`); // slug değerini kullanarak post verisini alırız.
  if (!postData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: postData,
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const allPosts = getAllPosts();

  const slugs = allPosts.map((post) => post.slug);

  return {
    paths: slugs.map((slug) => ({
      params: { slug }, // slug değerini params olarak döneriz
    })),
    fallback: false,
    // URL'e gittiğinde:
    // Server-side'da sayfa render edilecek
    // Kullanıcı tam yüklenmiş sayfayı görecek
    // Sonraki ziyaretlerde bu sayfa cache'den servis edilecek
  };
}

// fallback: false - Paths'te olmayan sayfalar 404 döner
// fallback: true - Loading state gösterir, sonra client-side'da render eder
// fallback: 'blocking' - Server-side'da render eder, loading state yok
export default PostDetailPage;
