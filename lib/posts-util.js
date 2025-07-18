import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { get } from 'http';

const postsDirectory = path.join(process.cwd(), 'pages', 'posts');

export function getPostFiles() {
  try {
    const postFiles = fs.readdirSync(postsDirectory);
    // Sadece .md dosyalarını filtrele
    return postFiles.filter((filename) => filename.endsWith('.md'));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostData(postIdentifier) {
  try {
    const postSlug = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
      slug: postIdentifier.replace(/\.md$/, ''),
      ...data,
      content,
    };
    return postData;
  } catch (error) {
    console.error(`Error reading post file ${postIdentifier}:`, error);
    return null;
  }
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  // Sadece .md dosyalarını filtrele
  const markdownFiles = postFiles.filter((filename) => filename.endsWith('.md'));

  const allPosts = markdownFiles
    .map((filename) => {
      return getPostData(filename);
    })
    .filter((post) => post !== null); // Null değerleri filtrele

  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return sortedPosts;
}
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
