import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../public/logo.png';
import constructionImg from '../../public/logo.png';

const ComingSoon = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${constructionImg}')` }}
    >
      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl">Under Construction</p>
      </div>

      {/* Logo */}
      <Link href="/" className="absolute top-4 left-4 z-20">
        <Image src={logoImg} alt="Logo" width={100} height={50} />
      </Link>
    </div>
  );
};

export default ComingSoon;
