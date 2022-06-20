import { Navbar } from "../../componentes";
import { usePwdToggle } from "./password-toggle";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import{ toast} from "react-toastify"
import { useAuth } from "../../hooks/context/auth-context";

export function SignUpPage() {
    const {authDispatch}=useAuth();
    const navigate=useNavigate();
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        passwordSimilar:false,
      })
      const changeHandler = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const [pwdToggle, pwdToggler] = usePwdToggle();
    const SignUpHandler=async () => {
        try {
          const response = await axios.post("/api/auth/signup", user);
          if (response.status === 201) {
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(response.data.createdUser));
    
            authDispatch({ type: "SIGNUP", payload: { user: response.data.createdUser, token: response.data.encodedToken } })  
            navigate("/home");
          }
          else if (response.status === 422) {
            toast.info("account alerady exists");
          }
          else if (response.status === 500) {
            toast.error("Server Error");
          }
        }
        catch (error) {
          console.log(error);
        }
    }
    const checkInputsAreNotEmpty=(user)=>{
        for (let key in user) {
            if (!Boolean(user[key]) && key !== "passwordSimilar" ) {
              return false;
            }
          }
      return true;
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!checkInputsAreNotEmpty(user)){
            toast.warn("feild are not empty")
        }else if(user.password !==user.confirmPassword){
            toast.warn("password should be similar")
            setUser({...user,passwordSimilar:true})
        }else{
            SignUpHandler(user,authDispatch,navigate)
            toast.success("account successfully signup")
        }
    }
    return <>
        <Navbar />
        <form className="auth-bd auth-container padding-md">
            <h2 className="auth-h2">Sign Up</h2>
            <div className="flex-col">
                <label>First Name</label>
                <input  className="input-field input-text"
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={changeHandler}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    className="input-field input-text" 
                    value={user.lastName}
                    onChange={changeHandler}
                    />
                <label>Email</label>
                <input
                    type="email"
                    className="input-field input-email"
                    name="email"
                    value={user.email}
                    onChange={changeHandler}
                    />
                <label>Password</label>
                <div className="password-field">
                    <input
                        type={`${pwdToggle.type}`}
                        name="password"
                        className="input-field input-pwd" 
                        value={user.password}
                        onChange={changeHandler}
                        />
                    <i className={`fa-solid ${pwdToggle.className} cursor-pointer eye-left`} onClick={pwdToggler}></i>
                </div>
                <label>Confirm Password</label>
                <div className="password-field">
                    <input
                        type={`${pwdToggle.type}`}
                        name="confirmPassword"
                        className="input-field input-pwd" 
                        value={user.confirmPassword}
                        onChange={changeHandler}
                        />
                    <i className={`fa-solid ${pwdToggle.className} cursor-pointer eye-left`} onClick={pwdToggler}></i>
                </div>
            </div>
            <div className="flex-col flex-justify">
                <button 
                className="primary-btn cursor-pointer"
                onClick={submitHandler}
                >Sign Up</button>
                <p>Already Have a account ?
                    <Link to="/signin">
                        <span className="auth-text cursor-pointer">SignIn</span>
                    </Link>
                </p>
            </div>
        </form>
    </>;
}