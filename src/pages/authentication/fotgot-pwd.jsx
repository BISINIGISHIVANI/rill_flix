import "./auth.css";
import { Navbar } from "../../componentes";
export function ForgotPage(){
    return <>
    <Navbar/>
    <form className="auth-bd auth-container padding-md">
    <h2 className="auth-h2">ForgotPassword</h2>
    <div className="flex-col flex-justify">
    <p className="padding-sm input-email">Enter your email address to reset your 
   password.</p>
    <label>Email</label>
    <input 
    type="email"
    className="input-field"/>
    </div>
    <div className="flex-col flex-justify">
    <button className="primary-btn cursor-pointer">Send</button>
    </div>
    </form>
    </>
}