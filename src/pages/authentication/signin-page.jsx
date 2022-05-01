import { Navbar } from "../../componentes";
import { usePwdToggle } from "./password-toggle";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/context/auth-context";
import "./auth.css";
export function SignInPage() {
    const {authDispatch}=useAuth();
    const navigate=useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const guestUser = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const guestUserHandler = (event) => {
        event.preventDefault();
        setUser(guestUser);
    };
    const [pwdToggle, pwdToggler] = usePwdToggle();
    const signInHandler = async () => {
        try {
          const response = await axios.post("/api/auth/login", user);
          if (response.status === 200) {
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(response.data.foundUser));
    
            authDispatch({ type: "LOGIN", payload: { user: response.data.foundUser, token: response.data.encodedToken } })
            navigate("/home");
          }
          else if (response.status === 404) {
            alert("Email not found");
          }
          else if (response.status === 401) {
            alert("password or email not correct");
          }
          else if (response.status === 500) {
            alert("Server Error");
          }
        }
        catch (error) {
          console.error(error);
        }
      }
      const checkInputsAreNotEmpty=(user)=>{
        for (let key in user) {
            if (!Boolean(user[key])) {
              return false;
            }
          }
      return true;
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!checkInputsAreNotEmpty(user)){
            alert("feild are not empty")
        }else{
            signInHandler(user,authDispatch,navigate)
        }
    }
    return <>
        <Navbar />
        <form className="auth-bd auth-container padding-md">
            <h2 className="auth-h2">Sign In</h2>
            <div className="flex-col">
                <label>Email</label>
                <input
                    type="email"
                    className="input-field input-email"
                    name="email"
                    value={user.email}
                    onChange={changeHandler} />
                <label>Password</label>
                <div className="password-field">
                    <input
                        type={`${pwdToggle.type}`}
                        className="input-field input-pwd"
                        name="password"
                        value={user.password}
                        onChange={changeHandler} />
                    <i className={`fa-solid ${pwdToggle.className} cursor-pointer eye-left`} onClick={pwdToggler}></i>
                </div>
                <Link to="/forgotpassword">
                    <p className="cursor-pointer">Forgot pasword</p>
                </Link>
            </div>
            <div className="flex-col flex-justify">
                <button
                    onClick={ submitHandler}
                    className="cursor-pointer primary-btn"
                >Sign In</button>
                <button className="primary-btn cursor-pointer"
                    onClick={guestUserHandler}
                >Add Guest credentials</button>
                <p>Dont Have a account ?
                    <Link to="/signup">
                        <span className="auth-text cursor-pointer ">SignUp</span>
                    </Link>
                </p>
            </div>
        </form>
    </>;
}