import Head from 'next/head'
import Footer from '../components/Footer'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head data-theme={'light'}>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main data-theme={'light'}>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MyApp;
