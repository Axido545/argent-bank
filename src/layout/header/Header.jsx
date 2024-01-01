import "./header.css"
import logo from "../../assets/argentBankLogo.png"

export default function Header() {
    return <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <nav className="header-nav">
            <i className="fa fa-user-circle"></i>Sign In
        </nav>
    </div>
}