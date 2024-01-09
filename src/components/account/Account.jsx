import "./account.css"
import AccountDesc from "../accountdesc/accountDesc"
import BtnTransaction from "../btntransaction/BtnTransaction"

export default function Account({ type }) {
    return <section className="account">
        <AccountDesc type={type} />
        <BtnTransaction />
    </section >
}

