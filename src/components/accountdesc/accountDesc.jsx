import "./accountdesc.css"
import { useSelector } from "react-redux";

export default function AccountDesc() {
    const account = useSelector((state) => state.account.checking);
    return <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
    </div>
}