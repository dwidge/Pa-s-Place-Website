import React from 'react';
import fs from 'fs';
import path from 'path';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ScrollingQuotes from '../components/ScrollingQuotes';
import Carousel from '../components/Carousel';
import ProfileCardComponent from '../components/ProfileCardComponent';
import Footer from '../components/Footer';

function HomePage({ carouselImages, profileImages }) {
  const profiles = [
    {
      title: 'Donate',
      body: 'Join us in creating a haven of hope and growth at Pa’s Place. Your generosity allows us to provide safe accommodations, enriching activities, and educational opportunities to young guests in need. Together, we can make a lasting difference in their lives.',
      image: profileImages[0],
    },
    {
      title: 'Volunteer',
      body: 'Make a difference in young lives by volunteering at Pa’s Place. Join us in fostering a nurturing environment where every contribution counts towards creating memorable experiences and inspiring personal growth.',
      image: profileImages[1],
    },
    {
      title: 'Reach Out',
      body: 'Are you or someone you know in need of a safe haven for personal growth and community support? Pa’s Place offers a sanctuary for young guests, providing enriching activities, educational programs, and a nurturing environment. Reach out to us today and let’s embark on a journey of growth and joy together.',
      image: profileImages[2],
    },
  ];

  const keyPoints = (
    <div>
      <h2>Our Key Points</h2>
      <ul>
        <li>Safe and nurturing environment</li>
        <li>Enriching activities</li>
        <li>Educational opportunities</li>
        <li>Support for personal growth</li>
      </ul>
    </div>
  );

  return (
    <div>
      <Header />
      <Hero />
      <ScrollingQuotes />
      <ProfileCardComponent profiles={profiles} />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <Carousel images={carouselImages} keyPoints={keyPoints} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const keyPointsCarouselDirectory = path.join(process.cwd(), 'public/keyPointsCarousel');
  const imageCardIconsDirectory = path.join(process.cwd(), 'public/imageCardIcons');

  const keyPointsFilenames = fs.readdirSync(keyPointsCarouselDirectory);
  const imageCardIconsFilenames = fs.readdirSync(imageCardIconsDirectory);

  const carouselImages = keyPointsFilenames.map((name) => `/keyPointsCarousel/${name}`);
  const profileImages = imageCardIconsFilenames.map((name) => `/imageCardIcons/${name}`).slice(0, 3);

  return {
    props: {
      carouselImages,
      profileImages,
    },
  };
}

export default HomePage;
