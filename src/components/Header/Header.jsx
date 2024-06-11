import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";



export default function Header() {
    return (
        <header className="header">
            <Link to="/"><img src={logo} alt="Logo" className="logo"/></Link>
            <Navbar />
        </header>
    );
}