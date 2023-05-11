import Image from 'next/image';
import React, { useState } from 'react';

const ServicePane = ({paneImage, Header, bodyText, Imagealt}) => {
    const [showFullText, setShowFullText] = useState(false);
    
    function toggleText() {
        setShowFullText(!showFullText);
    }

    //Choose how many characters you want to display before text is cut off
    const shortText = bodyText.slice(0,100);

    return (
        <div id="serviceImagePane">
            <div id="serviceImage">
                <Image src={paneImage} alt={Imagealt} width="450" height="400"/>
            </div>
        <h4>{Header}</h4>
        <span>{showFullText ? bodyText : shortText}</span>
        <button onClick={toggleText}>{showFullText ? 'Show Less' : 'Show More'}</button>
        </div>
    );
};
export default ServicePane;