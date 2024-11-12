import "../style/hero.css";
import Image from "next/image";

function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* Left */}
                <div>
                <Image 
        src={"/images/ilyas.jpg"} 
        alt="Profile" 
        width={200}
        height={200}
        className="header-image"
        />
                </div>
                {/* Right */}
                <div className="hero-right-div">
                <h1 className="title-hero">I'm Sheikh Ilyas 
                Front-end Developer</h1>
                <p className="des-header">I'm Sheikh Ilyas, a front-end developer passionate about building beautiful, 
                    responsive websites. With expertise in Nextjs, HTML, CSS, JavaScript, and frameworks like React, I focus on 
                    delivering seamless user experiences. I create websites that are not only visually appealing but also
                     highly functional. Let's work together to turn your ideas into interactive web solutions. Feel free to 
                     explore my work and get in touch!

.</p>
                <button className="hero-button">HIRE ME</button>   
                </div>
            </div>
        </div>
    );
}
export default Hero;