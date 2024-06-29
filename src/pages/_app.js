// pages/_app.js

import '../styles/tailwind.css'; // or '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
