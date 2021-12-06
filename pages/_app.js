import 'tailwindcss/tailwind.css';
import '../styles/home.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
