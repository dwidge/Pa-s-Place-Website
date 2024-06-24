// src/pages/index.js

import React from 'react';
import fs from 'fs';
import path from 'path';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ScrollingQuotes from '../components/ScrollingQuotes';
import Carousel from '../components/Carousel';

function HomePage({ carouselImages }) {
  return (
    <div>
      <Header />
      <Hero />
      <ScrollingQuotes />
      <Carousel images={carouselImages} />
    </div>
  );
}

export async function getStaticProps() {
  const imagesDirectory = path.join(process.cwd(), 'public/keyPointsCarousel');
  const filenames = fs.readdirSync(imagesDirectory);
  const carouselImages = filenames.map((name) => `/keyPointsCarousel/${name}`);

  return {
    props: {
      carouselImages,
    },
  };
}

export default HomePage;