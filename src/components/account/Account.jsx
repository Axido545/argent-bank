import "./account.css"
import PropTypes from 'prop-types';

export default function Account({ title, amount, description }) {
    return <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank {title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description} Balance</p>
        </div>
        <button className="btn-transaction">View transactions</button>
    </section >
}

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}