import Image from 'next/image';
import React, { useState } from 'react';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';


const ServicePane = ({paneImage, Header, bodyText, Imagealt}) => {
    const [showFullText, setShowFullText] = useState(false);
    
    function toggleText() {
        setShowFullText(!showFullText);
    }

    //Choose how many characters you want to display before text is cut off
    const shortText = bodyText.slice(0,0);

    return (
        <div id="serviceImagePane">
            <h4>{Header}</h4>
            <div id="serviceImage">
                <Image src={paneImage} alt={Imagealt} width="450" height="400"/>
            </div>
            <button onClick={toggleText}>
                {showFullText ? (
                    <>
                        &nbsp;Show Less
                        <BiUpArrow />
                    </>
                ) : (
                    <>
                        &nbsp;Show More
                        <BiDownArrow />
                    </>
                )}
            </button>
        <span>{showFullText ? bodyText : shortText}</span>
        </div>
    );
};
export default ServicePane;