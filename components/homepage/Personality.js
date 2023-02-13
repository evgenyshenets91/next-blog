import classes from './Personality.module.css';
import Image from 'next/image';

export default function Personality() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/avatar.png'}
          alt={'Avatar'}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi</h1>
      <p>Blog about next js</p>
    </section>
  );
}
