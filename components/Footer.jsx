import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return (
        <>
        <footer>
            <div>
                <b><h1 id="footerHeading">Contact Us!</h1></b>
                <h4>(630)-440-5889 | APProInc@gmail.com</h4>
            </div>
            <div>
                <i><h6>Made in assocation with the College of DuPage Computer Science Club</h6></i>
                <Link href="https://github.com/cod-cs-club/AC-Website">
                    <Image id="gitHubLogo" src="/github.png" width="40" height="40" alt="GitHub logo" />
                </Link>
            </div>
        </footer>
        </>
    )
}