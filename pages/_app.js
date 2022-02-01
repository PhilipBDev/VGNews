import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>VGNews</title>
        <link rel="icon" href="https://i.imgur.com/flkZM59.png" />
        <meta property="og:title" content="VGNews" />
        <meta property="og:image" content="https://i.imgur.com/flkZM59.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
