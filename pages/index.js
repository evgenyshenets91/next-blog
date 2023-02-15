import { Fragment } from 'react';
import Personality from '@/components/homepage/Personality';
import FeaturePosts from '@/components/homepage/FeaturePosts';
import { getFeaturedPosts } from '@/lib/post-util';

export default function HomePage(props) {
  return (
    <Fragment>
      <Personality />
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
  };
}
