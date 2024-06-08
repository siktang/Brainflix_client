import "./Header.scss"
import Navbar from "../Navbar/Navbar"
import logo from "../../assets/images/logo/BrainFlix-logo.svg"



export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <Navbar />
        </header>
    );
}