import 'tailwindcss/tailwind.css';
import '../styles/home.css';
import Head from 'next/head';
import script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com'/>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap'
          rel='stylesheet'
        />
        <script
          id='header'
          src='https://code.jquery.com/jquery-3.6.0.min.js'
          integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4='
          
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
