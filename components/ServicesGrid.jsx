import Image from 'next/image';

export default function ServicesGrid(){
    return(
        <>
        <div id="service-images-container">
            <Image src="/Company Images/AC-Unit.jpg" width="230" height="250"/>
            <Image src="/Company Images/BasementUnit1.png" width="230" height="250" />
            <Image src="/Company Images/BasementUnit2.png" width="230" height="250" />
            <Image src="/Company Images/Closet-AC.jpg" width="230" height="250" />
            <Image src="/Company Images/Humidifier1.jpg" width="230" height="250" />
            <Image src="/Company Images/Humidifier2.jpg" width="230" height="250" />
            <Image src="/Company Images/OutdoorUnits.jpg" width="230" height="250" />
            <Image src="/Company Images/RoofUnit.jpg" width="230" height="250" />
        </div>
        </>
    )
}