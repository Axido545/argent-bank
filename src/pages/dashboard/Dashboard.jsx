import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useDispatch, useSelector } from "react-redux";
import EditName from "../../components/editname/EditName";
import { useEffect } from "react";
import { profileAsync } from "../../redux/userSlice";
import { accounts } from "../../../public/account.js"
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const firstName = useSelector(state => state.user.firstName);
    const lastName = useSelector(state => state.user.lastName);
    useEffect(() => {
        if (token) {
            dispatch(profileAsync(token));
        } else {
            navigate("/login")
        }
    }, [token, dispatch, navigate])

    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br />{firstName} {lastName}</h1>
                <EditName />
            </header>
            <div className="section-account">
                {accounts.map((account, index) => (
                    <Account
                        key={index}
                        title={account.title}
                        amount={account.amount}
                        description={account.description}
                    />
                ))}
            </div>
        </main>
        <Footer />
    </div >
}