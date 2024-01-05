import "./account.css"
import AccountDesc from "../accountdesc/accountDesc"

export default function Account({ title, amount, description }) {
    return <section className="account">
        <AccountDesc title={title} amount={amount} description={description} />
    </section >
}

