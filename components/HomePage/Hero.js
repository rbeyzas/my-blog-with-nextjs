import Image from 'next/image';
import React from 'react';
import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/beyza.jpeg"
          alt="An image showing Beyza"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Beyza</h1>
      <p>
        I blog about software - especially frontend and backend frameworks like React and Node.js
      </p>
    </section>
  );
}

export default Hero;
