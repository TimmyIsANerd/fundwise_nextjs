import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {

    const [idToggle, setIDToggle] = useState('false');

    const idToggleSwitch = () => {
        idToggle ? setIDToggle(false) : setIDToggle(true);
    }

        return (
            <nav className="navbar">
                <div className="navbar_container">
                    <Link href="/"><a id="navbar_logo"> <Image src="/images/FundWiseLogo.png" width="186" height="37.5" /> </a></Link>
                    <div className={idToggle ? "navbar_toggle" : "navbar_toggle is_active"} id="mobile_menu" onClick={idToggleSwitch}>
                        <span className="bar"></span><span className="bar"></span><span className="bar"></span>
                    </div>
                    <ul className={idToggle ? "navbar_menu" : "navbar_menu active"}>
                        <li className="navbar_item"><Link href="/"><a role="button" className="navbar_links">Home</a></Link></li>
                        <li className="navbar_item"><Link href="/services"><a role="button" className="navbar_links">Services</a></Link></li>
                        <li className="navbar_item"><Link href="/contact"><a role="button" className="navbar_links">Contact Us</a></Link></li>
                        <li className="navbar_btn"><Link href="/signup_signin"><a role="button" className="button">Sign In</a></Link></li>
                        {/* <li className="navbar_btn"><Link  href="/signup_signin"><a id="header_signup" role="button" className="button">Sign Up</a></Link></li> */}
                    </ul>
                </div>
            </nav>
        );
    }

    export default Navbar;