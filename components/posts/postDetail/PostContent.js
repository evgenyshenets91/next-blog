import ReactMarkdown from 'react-markdown';
import PostHeader from '@/components/posts/postDetail/PostHeader';
import classes from './PostContent.module.css';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

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
    code: props => {
      const { className, node } = props;

      return node.children.map(el => {
        return (
          <SyntaxHighlighter
            language={className.replace('language-', '')}
            style={atomDark}
            key={el.value}
          >
            {el.value}
          </SyntaxHighlighter>
        );
      });
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
