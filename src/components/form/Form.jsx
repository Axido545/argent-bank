import "./form.css"
import { setCredentials } from "../../redux/authSlice"
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../../redux/authApiSlice";

export default function Form() {
    const emailRef = useRef('');
    const errRef = useRef("");
    const [email, setEmail] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const dispatch = useDispatch()
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate()

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            const userData = response.data;
            console.log('Authentication response', userData);
            dispatch(setCredentials({ user: userData.body, accessToken: userData.body.token, }))


            setEmail('');
            setPassword('');
            navigate('/dashboard');
        } catch (err) {
            console.error('Authentication error', err);
            if (!err.response) {
                setErrMsg("aucune réponse du serveur");
            } else if (err.response?.status === 400) {
                setErrMsg("Identifiant ou mot de passe manquant")
            } else if (err.reponse?.status === 401) {
                setErrMsg("Non autorisé")
            } else {
                setErrMsg('La connexion a échoué')
            }
            errRef.current.focus()
        }

    };

    const handleUserInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="Login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="form-content">
                <i className="fa fa-user-circle login-icon"></i>
                <h1 className="form-title">Sign in</h1>
                <div className="input-wrapper">
                    <label htmlFor="email">Username</label>
                    <input type="text" id="email" ref={emailRef} autoComplete="off" value={email} onChange={handleUserInput} required />
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
