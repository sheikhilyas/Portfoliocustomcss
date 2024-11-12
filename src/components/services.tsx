import"../style/services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { MdWebStories } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { TbSeo } from "react-icons/tb";
import { GiDigitalTrace } from "react-icons/gi";
function Services(){
    return(
    <main className="main">
        <div className="services-container">
           {/* top div */}
           <div className="top-div-services">
            <h2 className="title-services">My Services</h2>
            <p className="dec-services">Ilyas is a skilled front-end 
            developer with a passion for creating engaging and responsive</p>

           </div>
           {/* bottom div */}
           <div className="boxces-con">
            <div className="box">
            <FaLaptopCode className="services-icon"/>
            <h3>Web Development</h3>
            <span>Blog, E-Commerec</span>
            </div>
            <div className="box">
            <MdMonitor className="services-icon"/>
            <h3>UI/UX Design</h3>
            <span>Mobile App, Web Design</span>
            </div>
            <div className="box">
            <MdWebStories className="services-icon"/>
            <h3>Website Optimization</h3>
            <span>Performance Optimization</span>
            </div>
            <div className="box">
            <DiResponsive className="services-icon"/>
            <h3>Responsive Web Design</h3>
            <span>Fluid Grid Layouts</span>
            </div>
            <div className="box">
            <TbSeo className="services-icon"/>
            <h3>SEO Optimization</h3>
            <span>Key Components of SEO</span>
            </div>
            <div className="box">
            <GiDigitalTrace className="services-icon"/>
            <h3>Digital Markiting</h3>
            <span>Search Engine Optimization</span>
            </div>
            
           </div>
        </div>
    </main>
    )
}
export default Services;