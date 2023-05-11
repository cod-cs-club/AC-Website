import ServicePane from 'components/ServicePane'

export default function ServicesGrid(){
    return(
        <>
        <ServicePane paneImage="/Company Images/AC-Unit.jpg" Header="Air Conditioners" bodyText="Best Air conditioners ever" Imagealt="Air Conditioner" />
        <ServicePane paneImage="/Company Images/Humidifier1.jpg" Header="Humidifiers" bodyText="Best Humidifiers ever" Imagealt="Humidifier" />
        <ServicePane paneImage="/Company Images/WaterHeater1.jpg" Header="Water Heaters" bodyText="Best Water Heaters ever" Imagealt="Water Heater" />
        <ServicePane paneImage="/Company Images/Furnace.jpg" Header="Furnaces" bodyText="Best Furnaces ever" Imagealt="Furnace" />
        <ServicePane paneImage="/Company Images/WaterHeater2.jpg" Header="Boilers" bodyText="Best Boilers ever" Imagealt="Boiler" />
        <ServicePane paneImage="/Company Images/UV-Light.jpg" Header="UV Sterilizers" bodyText="Best UV Sterilizer ever" Imagealt="UV Sterilizer" />
        <ServicePane paneImage="/Company Images/CoolingUnit2.jpg" Header="Cooling" bodyText="Best cooling ever" Imagealt="Industrial Cooling Unit" />
        </>
    )
}