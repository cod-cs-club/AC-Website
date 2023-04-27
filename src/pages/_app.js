import '@/styles/root.scss'
import '@/styles/locationStyles.scss'
import '@/styles/aboutUsStyles.scss'
import '@/styles/homepageStyles.scss'
import '@/styles/servicesStyles.scss'
import '@/styles/quoteStyles.scss'
import Head from 'next/head'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

const pages = [
  {name: "Home", href:"/"},
  {name: "Services", href:"/services"},
  {name: "Locations", href:"/location"},
  {name: "Get a Quote", href:"/Quote"},
  {name: "About Us", href:"/aboutUs"}
]

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AP Pro Inc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="\favicon.ico" />
      </Head>
      <NavBar navLinks={pages} />
      <Component {...pageProps} />
      <div id="footerContainer">
        <Footer footLinks={pages}/>
      </div>
    </>
  )
}