import NavBar from 'components/NavBar.jsx'
import Footer from 'components/Footer.jsx'

export default function QuotePage(){
    return (
        <>
        <NavBar />
        <div id="quoteText">
            <div>
                <h1>Got a problem? We can fix it!</h1>
                <h2>Send us an email & we'll get back to you as soon as we can</h2>
            </div>
            <div>
                <form>
                    <h2>Name:</h2>
                    <input type="text"></input>
                    <h2>Email:</h2>
                    <input type="text"></input>
                    <h2>Message:</h2>
                    <input type="text"></input>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}