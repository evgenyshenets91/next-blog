import ReactMarkdown from 'react-markdown';

import PostHeader from '@/components/posts/postDetail/PostHeader';
import classes from './PostContent.module.css';
import Image from 'next/image';

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img: props => {
      return (
        <div className={classes.image}>
          <Image
            src={`/images/posts/${post.slug}/${props.src}`}
            alt={props.alt}
            width={600}
            height={300}
          />
        </div>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
