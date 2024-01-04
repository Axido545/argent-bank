import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import "./login.css"
import Form from "../../components/form/Form";

export default function Login() {
    return <div>
        <Header />
        <main className="main-login">
            <Form />
        </main>
        <Footer />
    </div>
}