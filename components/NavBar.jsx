import Link from "next/link";
import Image from 'next/image';
import { FaTimes, FaBars } from "react-icons/fa"
import { useRef } from "react"

export default function NavBar({navLinks}){
    const navRef = useRef();

    const showNavbar = () =>
        navRef.current.classList.toggle("responsive_nav");

    return (
        <>  
        <div id="NavBar">
            <div className="FlexContainer" id="upperNav">
                <div id="logoContainer">
                    <Link href="/">
                        <Image id="logo" src="/Company Images/CompanyLogo.png" width="150" height="90" alt="AP Pro Inc. Logo" />
                    </Link>
                    <h1 id="upperNavText">AP Pro Inc</h1>
                </div>
                <div id="contactHeader">
                    <div id="phoneNumberHeader">
                        <i><h3 className="headerContactText">Call Us:</h3></i>
                        <h3 className="headerContactSource">630-440-5893</h3>
                    </div>
                    <div id="emailHeader">
                        <i><h3 className="headerContactText">Email Us:</h3></i>
                        <h3 className="headerContactSource">APProInc@gmail.com</h3>
                    </div>
                </div>
            </div>
            <nav ref={navRef}>
                <div className="FlexContainer">
                {
                    navLinks && navLinks.map(navItem =>{
                        return (
                            <button className="navButtons" key={navItem.name+"Button"} onClick={showNavbar}>
                                <Link className="navPageItem" href={navItem.href} key={navItem.name}>{navItem.name}</Link>
                            </button>
                        )
                    })
                }
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </div>
            </nav>
            <div className="outside-nav">
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </div>
        </>
    )
}