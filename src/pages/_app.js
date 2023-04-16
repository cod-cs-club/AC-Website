import '@/styles/root.css'
import '@/styles/locationStyles.css'
import '@/styles/aboutUsStyles.css'
import '@/styles/homepageStyles.css'
import '@/styles/servicesStyles.css'
import '@/styles/quoteStyles.css'
import Head from 'next/head'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

const pages = [
  {name: "Home", href:"/"},
  {name: "Services", href:"/Services"},
  {name: "Locations", href:"/Location"},
  {name: "Get a Quote", href:"/Quote"},
  {name: "About Us", href:"/AboutUs"}
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