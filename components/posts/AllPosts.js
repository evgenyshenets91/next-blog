import classes from './AllPosts.module.css';
import PostsGrid from '@/components/posts/PostsGrid';

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
