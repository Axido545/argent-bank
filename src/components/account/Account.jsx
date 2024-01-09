import "./account.css"
import AccountDesc from "../accountdesc/accountDesc"
import BtnTransaction from "../btntransaction/BtnTransaction"
import { useSelector } from "react-redux";

export default function Account({ type }) {
    const account = useSelector((state) => state.account[type]);
    return <section className="account">
        <AccountDesc title={account.title} amount={account.amount} description={account.description} />
        <BtnTransaction />
    </section >
}

