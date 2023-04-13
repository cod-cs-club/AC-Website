import '@/styles/root.css'
import '@/styles/locationStyles.css'
import '@/styles/aboutUsStyles.css'
import '@/styles/homepageStyles.css'
import '@/styles/servicesStyles.css'
import '@/styles/contactUsStyles.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AP Pro Inc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="\favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}