import Link from "next/link";
import Image from 'next/image';

const navLinks = [
    {name: "Home Page", href:"/"},
    {name: "Services", href:"/services"},
    {name: "Location", href:"/location"},
    {name: "Contact Us", href:"/contactUs"},
    {name: "About Us", href:"/aboutUs"}
]

export default function NavBar(){
    return (
        <>  
        <nav>
        <Link href="/">
            <Image id="logo" src="/Company Images/CompanyLogo.jpg" width="180" height="90" alt="AP Pro Inc. Logo" />
        </Link>
            <div className="FlexContainer">
            {
                navLinks.map(navItem =>{
                    return (
                        <Link className="navPageItem" href={navItem.href} key={navItem.name}>
                            <button id="navButton">{navItem.name}</button>
                        </Link>
                    )
                })
            }
            </div>
        </nav>
        </>
    )
}