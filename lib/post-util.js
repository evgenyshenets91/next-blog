import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postId) {
  const postSlug = postId.replace(/\.md$/, ''); // removes the file extension

  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPost = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  return allPost.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter(el => el.isFeatured);
}
