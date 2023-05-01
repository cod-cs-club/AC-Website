import Image from 'next/image';

const ServicePane = ({paneImage, Header, bodyText}) => (
    <div id="serviceImagePane">
        <div id="serviceImage">
            <Image src={paneImage} width="450" height="400"/>
        </div>
    <h4>{Header}</h4>
    <span>{bodyText}</span>
    </div>
);

export default ServicePane;