const Map = ({mapLink, mapName}) => (
    <iframe className="location-page-iframe" src={mapLink} name={mapName} />
);

 export default Map;