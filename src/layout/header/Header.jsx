import "./header.css"
import logo from "../../assets/argentBankLogo.png"
import { NavLink } from "react-router-dom"

export default function Header() {
    return <div className="header">
        <NavLink to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
        <NavLink to="/sign-in" className="header-nav">
            <i className="fa fa-user-circle"></i>Sign In
        </NavLink>
    </div>
}