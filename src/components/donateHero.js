// components/DonateHero.jsx

import Image from 'next/image';
import bgImg from '@/../public/donate/bg.jpg';

const DonateHero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full">
        <Image
          src={bgImg}
          alt="Donate Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          className="scale-100"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Donate</h1>
          <p className="text-xl md:text-2xl">To donate, contact Pierre at</p>
          <p className="text-xl md:text-2xl mt-2">083 309 7288</p>
        </div>
      </div>
    </div>
  );
};

export default DonateHero;
