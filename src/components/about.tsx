import "../style/hero.css";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../style/about.css";
import Image from "next/image";
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* Left */}
                <div>
                <Image 
    src="/images/sunny-copy.png" 
    alt="Profile" 
    width={300}
    height={300}
    className="header-image"
/> 
        <div className="social-icon">
        <Link href={"https://www.linkedin.com/in/sheikh-ilyas-ab8951329/"}><FaLinkedin className="s-icon1"/></Link>
        <Link href={""}><FaSquareXTwitter className="s-icon2"/></Link>
        <Link href={"https://www.facebook.com/profile.php?id=100089272455368&mibextid=ZbWKwL"}><IoLogoFacebook className="s-icon3"/></Link>
        </div>
                </div>
                {/* Right */}
                <div className="hero-right-div">
                <h1 className="title-hero">About us</h1>
                <p className="des-header">I’m Sheikh Ilyas, a front-end developer with 1 year of experience building responsive and
                     user-friendly websites. I specialize in HTML, CSS, JavaScript, and frameworks like React to create interactive
                      web applications. My focus is on delivering high-quality, performance-driven websites that work seamlessly across devices. 
                      I’m passionate about writing clean, efficient code and always eager to learn new technologies. Let’s collaborate to bring 
                      your web ideas to life with creativity and precision!</p>
                
                </div>
            </div>
        </div>
    );
}
export default About;