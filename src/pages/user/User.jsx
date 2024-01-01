import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./user.css"
import Account from "../../components/account/Account"

export default function User() {
    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br /> Tony Jarvis !</h1>
                <button className="user-edit-button">Edit Name</button>
            </header>
            <div className="section-account">
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />

            </div>
        </main>
        <Footer />
    </div>
}