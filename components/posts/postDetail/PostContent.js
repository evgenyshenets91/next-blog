import ReactMarkdown from 'react-markdown';

import PostHeader from '@/components/posts/postDetail/PostHeader';
import classes from './PostContent.module.css';

const DUMMY_POST = {
  title: 'Getting Started single post',
  image: 'getting-started-nextjs.png',
  excerpt: 'Next js is react framework',
  date: '2022-02-10',
  slug: 'getting-started-nextjs',
  content: '# This is first post',
};
export default function PostContent(props) {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
