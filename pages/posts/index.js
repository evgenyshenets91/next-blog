import AllPosts from '@/components/posts/AllPosts';
import { getAllPosts } from '@/lib/post-util';

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
