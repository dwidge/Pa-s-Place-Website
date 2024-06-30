import Image from 'next/image';

const ComfortVsSecurity = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex">
      {/* Comfort section */}
      <div className="relative w-1/2 h-full">
        <Image
          src="/secuirityVScomfort/comfortBG.png"
          alt="Comfort background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h2 className="text-black text-4xl font-bold mb-4">Comfort</h2>
          <p className="text-black text-2xl font-semibold text-center">
            The property features dignified gender-segregated dormitories and bathrooms for guests' comfort and privacy. The expansive property offers ample space for casual activities. Guests can enjoy a range of amenities including a trampoline and a miniature putt-putt course, providing opportunities to unwind and expend energy during their stay.
          </p>
        </div>
      </div>

      {/* Security section */}
      <div className="relative w-1/2 h-full">
        <Image
          src="/secuirityVScomfort/secuirityBG.jpg"
          alt="Security background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h2 className="text-white text-4xl font-bold mb-4">Security</h2>
          <p className="text-white text-2xl font-semibold text-center">
            With the implementation of CCTV, Gladiator Security, and support from the local Pennington Community Watch, guests can rest assured that Pa's Place prioritizes their safety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComfortVsSecurity;
