import "./nav.css"
import { NavLink } from "react-router-dom"

export default function Nav() {
    return <NavLink to="/login" className="header-nav">
        <i className="fa fa-user-circle"></i>Sign In
    </NavLink>
}