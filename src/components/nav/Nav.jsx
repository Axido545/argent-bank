import "./nav.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/authSlice";



export default function Nav() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log("isLoggedIn:", isLoggedIn);

    return (<NavLink to={isLoggedIn ? "/" : "/login"} className="header-nav">
        <i className="fa fa-user-circle"></i> {isLoggedIn ? "Sign Out" : "Sign In"}
    </NavLink>

    )
}