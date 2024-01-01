import "./account.css"
import myPropTypes from 'prop-types';

export default function Account({ title, amount, description }) {
    return <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
    </section>
}

Account.propTypes = myPropTypes;