import NavBar from 'components/NavBar.jsx'
import Footer from 'components/Footer.jsx'
import ContactBox from 'components/ContactBox.jsx'
import Header from 'components/Header.jsx'

export default function ContactUsPage(){
    return (
        <>
        <Header />
        <NavBar />
        <div className="FlexContainer">
            <div id="contactTextDiv">
                <div>
                    <h1>Contact us to get a quote today!</h1>
                    <p>
                        Lorem ipsum dolor sit amet. Ut voluptatem optio 33 voluptatem animi ut soluta error qui quasi commodi! 
                        Cum consequatur laudantium aut laborum illum ad omnis nobis eum fuga magni est commodi officia! 
                        Qui asperiores explicabo non galisum reprehenderit aut dolor dicta est ipsa fuga aut maiores nihil. 
                        Ab eaque beatae et explicabo corrupti qui animi laborum. 
                    </p>
                </div>
            </div>
            <div id="contactBoxDiv">
                <ContactBox />
            </div>
        </div>
        <Footer />
        </>
    )
}