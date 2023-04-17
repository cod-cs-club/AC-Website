export default function ContactBox({}){
    return (
        <>
        <div id="ContactBoxContainer">
            <h1 style={{color:"red"}}>Get a Quote Now!</h1>
            <div>
                <a href="/Quote"><button id="quoteButton">Get a quote</button></a>
                <h2>Call or Text Now at:</h2>
                <i><h3>(630)-440-5893</h3></i>
            </div>
            <div>
                <h2>Or Email us at:</h2>
                <i><h3>APProInc@gmail.com</h3></i>
            </div>
        </div>
        </>
    )
}