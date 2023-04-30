import Link from 'next/link';
import Image from 'next/image';

export default function Footer({footLinks}){
    return (
        <>
        <footer>
            <div className="FlexContainer">
                <div className="FlexContainer">
                    <Link href="/">
                        <Image id="logo" src="/Company Images/CompanyLogo.png" width="180" height="90" alt="AP Pro Inc. Logo" />
                    </Link>
                    <h1 >AP Pro Inc</h1>
                </div>
                <div id="footerLinksContainer">
                    {
                    footLinks && footLinks.map(footItem =>{
                        return (
                            <ul id="footerLinkList" key={footItem.name+"UL"}>
                                <li id="footLink"><a href={footItem.href} key={footItem.name}>{footItem.name}</a></li>
                            </ul>
                        )
                    })
                }
                </div>
            </div>
            <div style={{position:"relative"}}>
                <div id="clubFooter">
                    <i><h6>Wesbsite created in assocation with the College of DuPage Computer Science Club:</h6></i>
                    <i><h6><Link id="gitHubLink" href="https://github.com/cod-cs-club/AC-Website">&nbsp;(GitHub)</Link></h6></i>
                </div>
            </div>
        </footer>
        </>
    )
}