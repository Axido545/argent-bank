import "./nav.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, resetUser } from "../../redux/userSlice"

export default function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)
    const firstName = useSelector(state => state.user.firstName);


    const handlelogOut = () => {
        dispatch(logout());
        dispatch(resetUser());

        navigate('/', { replace: true });

    }

    return (<NavLink to={token ? "/" : "/login"}
        className="header-nav"> {firstName ? firstName + " " : " "}
        <i className="fa fa-user-circle"></i>
        {token ? <span onClick={handlelogOut}>Sign Out</span> : "Sign In"}
    </NavLink>
    )
}