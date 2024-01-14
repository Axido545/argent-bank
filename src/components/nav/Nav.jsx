import "./nav.css"
import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, resetUser } from "../../redux/userSlice"

export default function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token)
    const firstName = useSelector(state => state.user.firstName);

    const handleLogout = () => {
        dispatch(logout());
        console.log(token)
        dispatch(resetUser());
        navigate('/', { replace: true });
    }

    return (
        <div>
            {token ? (
                <Link to="/" className="header-nav">
                    <i className="fa fa-user-circle"></i>
                    {firstName && <span>{firstName} </span>}
                    <span onClick={handleLogout}>
                        <i className="fa fa-right-from-bracket"></i> Sign out
                    </span>
                </Link>
            ) : (
                <Link to="/login" className="header-nav">
                    <i className="fa fa-user-circle"></i> Sign in
                </Link>
            )}
        </div>
    );
}