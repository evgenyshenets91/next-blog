import { Fragment } from 'react';
import Personality from '@/components/homepage/Personality';
import FeaturePosts from '@/components/homepage/FeaturePosts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next js is react framework',
    date: '2022-02-10',
    slug: 'getting-started-nextjs',
  },
  {
    title: 'Course routing',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'Course routing description',
    date: '2022-03-11',
    slug: 'nextjs-file-based-routing',
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Personality />
      <FeaturePosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
