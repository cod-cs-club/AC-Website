import ServicesGrid from 'components/ServicesGrid.jsx'
import CarriersGrid from 'components/CarriersGrid.jsx'

export default function ServicesPage(){
    return (
        <>
        <div className="services-description">
            <h1>New Construction, Replacing Equipment & Service</h1>
            <p>
                Lorem ipsum dolor sit amet. Ut voluptatem optio 33 voluptatem animi ut soluta error qui quasi commodi! 
                Cum consequatur laudantium aut laborum illum ad omnis nobis eum fuga magni est commodi officia! 
                Qui asperiores explicabo non galisum reprehenderit aut dolor dicta est ipsa fuga aut maiores nihil. 
                Ab eaque beatae et explicabo corrupti qui animi laborum. 
            </p>
        </div>
        <div id="service-images-container">
            <ServicesGrid />
        </div>
        <div className="logo-heading">
            <h1>Brands We Service</h1>
            <div id="logos-container">
                <CarriersGrid />
            </div>
        </div>
        </>
    )
}