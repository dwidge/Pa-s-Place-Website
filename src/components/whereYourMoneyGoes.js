// components/WhereYourMoneyGoes.jsx

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import bgImg from '../../public/whereYourMoneyGoes/bg.jpg';
import featureIcon from '../../public/whereYourMoneyGoes/feature.png';

const WhereYourMoneyGoes = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bgElement = bgRef.current;
    let xPos = 0;
    let yPos = 0;

    const animateBackground = () => {
      xPos -= 0.1;
      yPos -= 0.1;
      bgElement.style.backgroundPosition = `${xPos}px ${yPos}px`;
      requestAnimationFrame(animateBackground);
    };

    animateBackground();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-150"
        style={{
          backgroundImage: `url('${bgImg.src}')`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 p-8">
        <div className="text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image container */}
          <div className="border-4 border-white rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-8 w-full md:w-2/5">
            <Image
              src={featureIcon}
              alt="Feature"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left w-full md:w-3/5">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Where Your Money Goes
            </h1>
            <p className="text-xl md:text-2xl">
              Our efforts will primarily focus on enhancing experiences for
              children by offering additional amenities. Additionally, we aim to
              expand beyond our accommodation services, ensuring inclusivity by
              catering to individuals who require extra assistance and support.
              This initiative is designed to provide a nurturing environment
              that not only meets the needs of our guests but also fosters a
              sense of community and compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereYourMoneyGoes;
