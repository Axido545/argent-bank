import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import "./login.css"

export default function SignIn() {
    return <div>
        <Header />
        <main className="main-login">
            <form className="form-content">
                <i className="fa fa-user-circle login-icon"></i>
                <h1 className="form-title">Sign in</h1>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input name="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>

                    <input name="password" />
                </div>

                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"

                    /><label htmlFor="remember-me">Remember me</label>

                </div>
                <a className="login-button" href="/user">Sign in</a>
            </form>
        </main>
        <Footer />
    </div>
}