import Link from "next/link";
import Image from 'next/image';

const navLinks = [
    {name: "Home", href:"/"},
    {name: "Services", href:"/services"},
    {name: "Location", href:"/location"},
    {name: "Get a Quote", href:"/Quote"},
    {name: "About Us", href:"/aboutUs"}
]

export default function NavBar(){
    return (
        <>  
        <div className="FlexContainer">
            <Link href="/">
                <Image id="logo" src="/Company Images/CompanyLogo.jpg" width="180" height="90" alt="AP Pro Inc. Logo" />
            </Link>
            <h1 style={{color:"red"}} id="navBarHeader">AP Pro Inc</h1>
        </div>
        <nav>
            <div className="CenteredFlexContainer">
            {
                navLinks.map(navItem =>{
                    return (
                        <button className="navButtons">
                            <a className="navPageItem" href={navItem.href} key={navItem.name}>{navItem.name}</a>
                        </button>
                    )
                })
            }
            </div>
        </nav>
        </>
    )
}