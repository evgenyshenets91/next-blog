import PostItem from '@/components/posts/PostItem';

import classes from './PostsGrid.module.css';

export default function PostsGrid(props) {
  return (
    <ul className={classes.grid}>
      {props.posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
