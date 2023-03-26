import { useEffect } from "react"

export default function HomePage(){
    return (
        <>  
        <main>
            <div id="Header">
                <div id="logoDiv">
                    <img id="logo" src="otherImages\newLogo.jpg" />
                </div>
                <div className="headerButtonDiv">
                    <a href="aboutUs"><button className="headerButton">About Us</button></a>
                    <a href="services"><button className="headerButton">Services</button></a>
                    <a href="location"><button className="headerButton">Location</button></a>
                    <a href="contactUs"><button className="headerButton">Contact</button></a>
                </div>
            </div>
            <div id="image-carousel-container">
                <div className="homepage-images">
                    <img src="otherImages/What-Exactly-is-a-HVAC-System-Unit-1.jpg" />
                </div>
                <div className="homepage-images">
                <img src="otherImages/RaS_BlogHeaders-181543374.jpg"/>
                </div>
                
            </div>
            
        </main>
        </>
    )
}
/*
//JS files can't be imported using a simple <script> tag in JSX, so I'm temporarily commenting these 
out until I can get outer JS files properly rendered in a component. The JS code is currently at
'static\imageCarousel.js', and will be referenced in this component 
<a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
<a className="next" onClick={plusSlides(1)}>&#10095;</a>
*/