import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import "./sign-in.css"

export default function SignIn() {
    return <div>
        <Header />
        <main className="main-sign-in">
            <form className="form-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign in</h1>
            </form>
        </main>
        <Footer />
    </div>
}