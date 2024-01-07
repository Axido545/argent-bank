import Header from "../../layout/header/Header"
import Footer from "../../layout/footer/Footer"
import "./dashboard.css"
import Account from "../../components/account/Account"
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../../redux/authSlice";
import { setProfile } from "../../redux/userSlice";
import { useGetUserProfileQuery } from "../../redux/authApiSlice";
import { useEffect } from "react";
import { mainStore } from "../../redux/store";

export default function Dashboard() {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    console.log(user, token)
    const dispatch = useDispatch()
    const { data: userProfile, isError } = useGetUserProfileQuery();
    useEffect(() => {
        console.log(user, token);
        console.log("userProfile:", userProfile || "Profile not available yet");
        console.log("Redux Store:", mainStore.getState());

        if (!isError && userProfile) {
            dispatch(setProfile(userProfile));
        }
    }, [dispatch, user, token, userProfile, isError]);

    return <div>
        <Header />
        <main className="user-main">
            <header className="user-header">
                <h1>Welcome back<br />{userProfile?.firstName}</h1>
                <button className="user-edit-button"></button>
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