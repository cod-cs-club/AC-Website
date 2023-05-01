import ServicePane from 'components/ServicePane'

export default function ServicesGrid(){
    return(
        <>
            <ServicePane paneImage="/Company Images/AC-Unit.jpg" Header="Air Conditioners" bodyText="Best Air conditoners ever" />
            <ServicePane paneImage="/Company Images/Humidifier1.jpg" Header="Humidifiers" bodyText="Best Humidifiers ever" />
            <ServicePane paneImage="/Company Images/WaterHeater1.jpg" Header="Water Heaters" bodyText="Best Water Heaters ever" />
            <ServicePane paneImage="/Company Images/Furnace.jpg" Header="Furnaces" bodyText="Best Furnaces ever" />
            <ServicePane paneImage="/Company Images/WaterHeater2.jpg" Header="Boiler" bodyText="Best Boilers ever" />
            <ServicePane paneImage="/Company Images/UV-Light.jpg" Header="UV Sterilizers" bodyText="Best UV Sterilizer ever" />
        </>
    )
}