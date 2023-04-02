import NavBar from 'components/NavBar.jsx'
import Footer from 'components/Footer.jsx'
import ImageCarousel from 'components/ImageCarousel.jsx'
import Header from 'components/Header.jsx'

const sliderImages = [
  {name: "img1", src:"/AC-unit.jpg"},
  {name: "img2", src:"/BasementUnit2.png"},
  {name: "img3", src:"/BasementUnit1.png"},
  {name: "img4", src:"/Closet-AC.jpg"},
  {name: "img5", src:"/Humidifier1.jpg"},
  {name: "img6", src:"/Humidifier2.jpg"}
]

export default function Home() {
  return (
    <>
    <Header />
    <NavBar />
      <ImageCarousel slides={sliderImages}/>
    <Footer />
    </>
  )
}
