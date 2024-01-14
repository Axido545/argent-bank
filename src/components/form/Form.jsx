import "./form.css"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { loginAsync } from "../../redux/authSlice";

export default function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const errMsg = useSelector(state => state.auth.error)
    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        console.log("errMsg:", errMsg);
        if (token) {

            navigate("/dashboard")
        } else {

            console.log("pas de token")
        }
    }, [token, navigate, errMsg])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginAsync({ email, password }))
    };

    const handleUserInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const content = (
        <section className="Login">
            <p style={{ color: 'yellow' }} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="form-content">
                <i className="fa fa-user-circle login-icon"></i>
                <h1 className="form-title">Sign in</h1>
                <div className="input-wrapper">
                    <label htmlFor="email">Username</label>
                    <input type="text" id="email" autoComplete="off" value={email} onChange={handleUserInput} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={handlePasswordInput} autoComplete="current-password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="login-button" onClick={handleSubmit} >Sign in</button>
            </form>
        </section >
    )
    return content
}
