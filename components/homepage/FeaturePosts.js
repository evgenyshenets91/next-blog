import classes from './FeaturePosts.module.css';
import PostsGrid from '@/components/posts/PostsGrid';

export default function FeaturePosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
