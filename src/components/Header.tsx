import Link from "next/link";
import "../style/header.css";
function Header() {
    return (
        <div className="header">
            {/* Left */}
            <div>
                <h1 className="logo">*SI*</h1>
            </div>
                {/* Right */}
                
                <div className="header-right-div">
                    <ul className="header-links">
                        <li>
                            <Link className="nav-links" href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="nav-links" href={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link className="nav-links" href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default Header;