import Map from 'components/Map.jsx'

export default function LocationPage(){
    return (
        <>
        <div className="mapContainer">
            <div className="cities-container">
                <h2 className="location-page-header">Areas we service</h2>
                <ul className="city-Ul">
                    <a href="" target="Roselle"><li className="city-Li">Roselle</li></a>
                    <li className="city-Li">City</li>
                    <li className="city-Li">City</li>
                </ul>
            </div> 
            <Map mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47455.01241008352!2d-88.12735588001821!3d41.98013499099935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fac0178d2f253%3A0x70ab595cf5049a0!2sRoselle%2C%20IL!5e0!3m2!1sen!2sus!4v1682983794133!5m2!1sen!2sus" name="Roselle" />
            <div>
                <p></p>
            </div>
        </div>
        </>
    )
}