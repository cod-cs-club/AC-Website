/**
 * 'useStat' is a hook from React. It allows us to set that state of a element. It is defined as an
 * array of two indexes, the first describing the current value, the second being a setter of a value.
 * The parameter with the useState defines the intial value. In other words:
 * 
 * const [something, setSomething] = useState(initialValue)
 * 
 * (If you're confused, I highly reccomend you skim over the official React documentation on
 * useState here: https://react.dev/reference/react/useState)
 * 
 * In this component, which iterates through the array 'slides' (a prop accepted in index.js),
 * the buttons in the return statement determine whether to increase or decrease currentSlideIndex
 * by 1, corresponding to the current displayed index of the slides array. In the function
 * 'nextImg()', The variable 'isThisTheFinalSlide' determines whether the value of currentSlideIndex 
 * is equal to the final index of the array (arrayLength - 1). 'newIndex', therefore, uses a ternary 
 * expression to determine whether the new index should be set to 0 (the beginning of the array) or 
 * to increment to the next element whether if the current index is the final slide or not 
 * (as determined by the isThisTheFinalSlide variable). Lastly, setSlideIndex (the 2nd element in 
 * our useState array) sets the value of currentSlideIndex to newIndex. 
 * 
 * 'prevImg()' works much in  the same way, only depreciating the value of currentSlideIndex instead 
 * of raising it.
 */
import Image from 'next/image'
import { useState } from 'react';

var timer;

export default function ImageCarousel({slides}){
    let arrayLength = slides.length;
    const [currentSlideIndex, setSlideIndex] = useState(0);

    function nextImg(){
        const isThisTheFinalSlide = currentSlideIndex == arrayLength - 1;
        const newIndex = isThisTheFinalSlide ? 0 : currentSlideIndex + 1;
        setSlideIndex(newIndex);
    }

    function prevImg(){
        const isThisTheFirstSlide = currentSlideIndex == 0
        const newIndex = isThisTheFirstSlide ? arrayLength - 1 : currentSlideIndex - 1;
        setSlideIndex(newIndex);
    }

    function autoslide(){
        const isThisTheFinalSlide = currentSlideIndex == arrayLength - 1;
        const newIndex = isThisTheFinalSlide ? 0 : currentSlideIndex + 1;
        setSlideIndex(newIndex);
    }

    function dotClick(num) {
        if (num == currentSlideIndex)
            return false;
    
        else
            (num != currentSlideIndex)
            setSlideIndex(num);
    }

    clearTimeout(timer);
    timer = setTimeout(() => autoslide(1), 3000);


    return(
        <>
        <div id="sliderContainer">
            <div>
                <Image src={slides[currentSlideIndex].src} width="500" height="370" />
            </div>
            <div id="sliderButtonDiv">
                <button className="sliderButtonleft" onClick={() => prevImg()}>&#x3c;</button>
                <button className="sliderButtonright" onClick={() => nextImg()}>&#x3e;</button>
            <div className="dotDiv">   
                <span className="dots" onClick={() => dotClick(0)}></span>
                <span className="dots" onClick={() => dotClick(1)}></span>
                <span className="dots" onClick={() => dotClick(2)}></span>
                <span className="dots" onClick={() => dotClick(3)}></span>
                <span className="dots" onClick={() => dotClick(4)}></span>
                <span className="dots" onClick={() => dotClick(5)}></span>
            </div>    
            </div> 
        </div>
        </>
    )
}


