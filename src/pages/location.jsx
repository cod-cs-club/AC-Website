import Map from 'components/Map.jsx'

export default function LocationPage(){
    return (
        <>
        <div className="mapContainer">
            <div className="cities-container">
                <h2 className="location-page-header">Areas we service</h2>
                <ul className="city-Ul">
                    <li className="city-Li"><a href= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47455.05998367852!2d-88.12744146598595!3d41.98007115404448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fac0178d2f253%3A0x70ab595cf5049a0!2sRoselle%2C%20IL!5e0!3m2!1sen!2sus!4v1683046793782!5m2!1sen!2sus" target="iframe_a">Roselle</a></li>
                    <li className="city-Li"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380514.505350902!2d-88.06229796555198!3d41.83325972464443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1683044617637!5m2!1sen!2sus" target="iframe_a">Chicago</a></li>
                    <li className="city-Li"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47518.32824096722!2d-87.98497541720978!3d41.89510410639751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4cb18a3f8c9b%3A0x83e8a9b12bf7f9e2!2sElmhurst%2C%20IL!5e0!3m2!1sen!2sus!4v1683046657911!5m2!1sen!2sus" target="iframe_a">Elmhurst</a></li>
                </ul>
            </div> 
            <Map mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.5336850436!2d-115.34015398902767!3d36.12488665214402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1683046967747!5m2!1sen!2sus"/>
            <div>
                <p></p>
            </div>
        </div>
        </>
    )
}