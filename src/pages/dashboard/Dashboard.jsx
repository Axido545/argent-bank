import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../../redux/authSlice";

export default function Dashboard() {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)

    const welcome = user ? `Welcome ${user}!` : ''
    const tokenAbbr = `${token.slice(0, 9)}...`


    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br /> {welcome}</h1>
                <p>Token : {tokenAbbr}</p>
                <button className="user-edit-button">Edit Name</button>
            </header>
            <div className="section-account">
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            </div>
            <div className="section-account">
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            </div>
            <div className="section-account">
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            </div>
        </main>
        <Footer />
    </div>
}