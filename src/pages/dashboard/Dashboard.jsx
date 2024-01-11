import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useDispatch, useSelector } from "react-redux";
import EditName from "../../components/editname/EditName";
import { useEffect } from "react";
import { profileAsync } from "../../redux/userSlice";
export default function Dashboard() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const firstName = useSelector(state => state.user.firstName);
    const lastName = useSelector(state => state.user.lastName);
    console.log(token, firstName, lastName)

    useEffect(() => {
        if (token) {
            dispatch(profileAsync({ token }));
        }
    }, [token, dispatch])

    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br />{firstName}{lastName}</h1>
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