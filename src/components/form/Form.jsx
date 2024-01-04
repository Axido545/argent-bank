import "./form.css"
import { loginAsync } from "../../redux/authSlice"
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Form() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test')
        dispatch(loginAsync({ email, password }));
    };

    return <form className="form-content">
        <i className="fa fa-user-circle login-icon"></i>
        <h1 className="form-title">Sign in</h1>
        <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password</label>

            <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />        </div>

        <div className="input-remember">
            <input
                type="checkbox"
                id="remember-me"

            /><label htmlFor="remember-me">Remember me</label>

        </div>
        <button onClick={handleSubmit} className="login-button" href="/dashboard">Sign in</button>
    </form>

}