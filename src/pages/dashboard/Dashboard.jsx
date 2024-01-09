import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/authSlice";
import EditName from "../../components/editname/EditName";
export default function Dashboard() {
    const token = useSelector(selectCurrentToken)
    console.log(token)

    const userProfile = useSelector((state) => state.user);
    const firstName = userProfile && userProfile.firstName ? userProfile.firstName + "  " : "";
    const lastName = userProfile && userProfile.lastName ? userProfile.lastName + "  " : "";

    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <EditName />
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
    </div >
}