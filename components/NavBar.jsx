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
        <div className="FlexContainer" style={{justifyContent: "space-between"}}>
            <Link href="/">
                <Image id="logo" src="/Company Images/CompanyLogo.png" width="150" height="90" alt="AP Pro Inc. Logo" />
            </Link>
            <h1 style={{color:"#009f46"}}>AP Pro Inc</h1>
            <div>
                <p>Call us: 630-440-5893</p>
                <p>Email us: APProInc@gmail.com</p>
            </div>
        </div>
        <nav ref={navRef}>
            <div className="FlexContainer">
            {
                navLinks && navLinks.map(navItem =>{
                    return (
                        <button className="navButtons" key={navItem.name+"Button"}>
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
        </>
    )
}