import "./form.css"
import { loginAsync, setCredentials } from "../../redux/authSlice"
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../../redux/authApiSlice";

export default function Form() {
    const userRef = useRef('');
    const errRef = useRef("");
    const [user, setUser] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const dispatch = useDispatch()
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login({ user, password }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPassword('')
            navigate('/dashboard')

        } catch (err) {
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

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="Login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form className="form-content" onSubmit={handleSubmit}>
                <i className="fa fa-user-circle login-icon"></i>
                <h1 className="form-title">Sign in</h1>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={userRef} autoComplete="off" value={user} onChange={handleUserInput} required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={handlePasswordInput} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button onClick={handleSubmit} className="login-button" href="/dashboard">Sign in</button>
            </form>
        </section>
    )

    return content

}