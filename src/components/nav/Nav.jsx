import "./nav.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/authSlice";

export default function Nav() {
    const token = useSelector(selectCurrentToken)
    console.log(token)

    return (<NavLink to={token ? "/" : "/login"}
        className="header-nav">
        <i className="fa fa-user-circle"></i>
        {token ? "Sign Out" : "Sign In"}
    </NavLink>
    )
}