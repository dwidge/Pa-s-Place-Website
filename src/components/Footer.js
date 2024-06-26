// components/Footer.js
const Footer = () => {
    return (
      <footer className="relative h-52 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/footer/bg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="text-white">Footer Content Goes Here</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  