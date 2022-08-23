import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
            <ul className="list">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/services"><a>Services</a></Link></li>
                <li><Link href="/about"><a>About Us</a></Link></li>
                <li><Link href="/terms"><a>Terms</a></Link></li>
                <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
            </ul>
            <p className="copyright">
                FundWise © <span> {new Date().getFullYear()} </span>.
            </p>
        </div>
    );
}

export default Footer;