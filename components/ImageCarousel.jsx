import Image from 'next/image'

export default function ImageCarousel(){
    return(
        <>
        <div id="image-carousel-container">
            <div className="homepage-images">
                <Image src="/Company Images/BasementUnit1.png" width="200" height="200"/>
            </div>
        </div>
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