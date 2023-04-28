import Image from 'next/image';

export default function ServicesGrid(){
    return(
        <>
        <div id="service-images-container">


            <div id="serviceImage-1">
                <div id="image1">
                    <Image src="/Company Images/AC-Unit.jpg" width="450" height="400"/>
                </div>
                <h4>Air Conditioners</h4>
                <span>Filler Text: I had a decent day today! I bought myself a spicy chicken sandwich from Chick-Fil-A today and enjoyed it very much.</span>
            </div>


            <div id="serviceImage-2">
                <div id="image2">
                    <Image src="/Company Images/BasementUnit1.png" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>


            <div id="serviceImage-3">
                <div id="image3">
                    <Image src="/Company Images/BasementUnit2.png" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>


            <div id="serviceImage-4">
                <div id="image4">
                    <Image src="/Company Images/Closet-AC.jpg" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>
            

            <div id="serviceImage-5">
                <div id="image5">
                    <Image src="/Company Images/Humidifier1.jpg" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>


            <div id="serviceImage-6">
                <div id="image6">
                    <Image src="/Company Images/Humidifier2.jpg" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>


            <div id="serviceImage-7">
                <div id="image7">
                    <Image src="/Company Images/OutdoorUnits.jpg" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>


            <div id="serviceImage-8">
                <div id="image8">
                    <Image src="/Company Images/RoofUnit.jpg" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>


            <div id="serviceImage-9">
                <div id="image9">
                    <Image src="/Company Images/WaterHeater1.jpg" width="450" height="400" />
                </div>
                <h4>UV Lights</h4>
                <span>Filler Text</span>
            </div>
        </div>
        </>
    )
}