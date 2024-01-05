import "./header.css"
import logo from "../../assets/argentBankLogo.png"
import { NavLink } from "react-router-dom"
import Nav from "../../components/nav/Nav"

export default function Header() {
    return <div className="header">
        <NavLink to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
        <Nav />
    </div>
}