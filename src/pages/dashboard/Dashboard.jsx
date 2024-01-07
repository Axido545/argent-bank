import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../../redux/authSlice";
import { setProfile, setNoProfil } from "../../redux/userSlice";
import { useGetUserProfileQuery } from "../../redux/authApiSlice";

export default function Dashboard() {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    console.log(user)
    console.log(token)
    const dispatch = useDispatch()
    // const welcome = user ? `Welcome ${user}!` : ''
    // const tokenAbbr = `${token.slice(0, 9)}...`
    const { data: userProfile } = useGetUserProfileQuery(token);
    dispatch(setProfile(userProfile));
    const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br />{user}</h1>
                <button className="user-edit-button">{fullName}</button>
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