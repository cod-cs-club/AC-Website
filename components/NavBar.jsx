import Link from "next/link";
import Image from 'next/image';

export default function NavBar({navLinks}){
    return (
        <>  
        <div className="FlexContainer">
            <Link href="/">
                <Image id="logo" src="/Company Images/CompanyLogo.jpg" width="180" height="90" alt="AP Pro Inc. Logo" />
            </Link>
            <h1 style={{color:"red"}} id="navBarHeader">AP Pro Inc</h1>
        </div>
        <nav>
            <div className="FlexContainer">
            {
                navLinks && navLinks.map(navItem =>{
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