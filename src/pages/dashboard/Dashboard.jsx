import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useSelector } from "react-redux";
import EditName from "../../components/editname/EditName";
export default function Dashboard() {
    const token = useSelector(state => state.auth.token)
    console.log(token)

    const firstName = "";
    const lastName = "";

    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <EditName />
            </header>
            <div className="section-account">
                <Account type='checking' />
            </div>
            <div className="section-account">
                <Account type='saving' />
            </div>
            <div className="section-account">
                <Account type="creditCard" />
            </div>
        </main>
        <Footer />
    </div >
}