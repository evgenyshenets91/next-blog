import AllPosts from '@/components/posts/AllPosts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started all posts page',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next js is react framework',
    date: '2022-02-10',
    slug: 'getting-started-nextjs',
  },
  {
    title: 'Course routing all posts page',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'Course routing description',
    date: '2022-03-11',
    slug: 'nextjs-file-based-routing',
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
