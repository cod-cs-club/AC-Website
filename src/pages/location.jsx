import Link from 'next/link'

export default function LocationPage(){
    return (
        <>
        <div className="mapContainer">
            <div className="cities-container">
                <h2 className="location-page-header">Areas we service</h2>
                <ul className="city-Ul">
                    <li className="city-Li">City</li>
                    <li className="city-Li">City</li>
                    <li className="city-Li">City</li>
                </ul>
            </div> 
            <iframe className="location-page-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3
            !1d206253.4501368927!2d-115.31508529192429!3d36.12491845071429!2m3!1f0!2
            f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6
            d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1678179232037!5m2!1se
            n!2sus" name="iframe_a">
            </iframe>
            <div className="address-container">
                <ul className="address-Ul">
                    <li className="address-Li"><a href="" target="iframe_a">Location test3</a></li>
                    <li className="address-Li"><a href="" target="iframe_a">Location test4</a></li>
                    <li className="address-Li"><a href="" target="iframe_a">Location test5</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}