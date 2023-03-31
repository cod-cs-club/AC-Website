import Image from 'next/image';
import Link from 'next/link';

export default function ContactBox(){
    return (
        <>
        <div id="ContactBoxContainer">
            <h1 style={{color:"red"}}>Get a quote today!</h1>
            <div>
                <h2>Call or Text Now at:</h2>
                <i><h3>(630)-440-5893</h3></i>
            </div>
            <div>
                <h2>Or Email us at:</h2>
                <i><h3>APProInc@gmail.com</h3></i>
            </div>
        </div>
        </>
    )
}