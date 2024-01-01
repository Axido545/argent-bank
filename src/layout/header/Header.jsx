import "./header.css"
import logo from "../../assets/argentBankLogo.png"

export default function Header() {
    return <div className="header">
        <img className="logo" src={logo} alt="logo" />
    </div>
}