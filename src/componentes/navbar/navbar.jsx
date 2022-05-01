import {avatarIcn,logo,searchIcn} from "../../assests/icons/icon";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./navbar.css";
import {useAuth} from "../../hooks/context/auth-context";
export default function Navbar(){
  const {authState,authDispatch}=useAuth();
  const navigate=useNavigate()
  const authName=authState.user;
  const checkUserStatus=(authName)=>{
    return authName ?"Logout" :"Login";
  }
  const logoutHandler=()=>{
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({type:"LOGOUT"})
  }
  const userHandler=(type)=>{
    type==="Login" ? navigate("/login"):logoutHandler();
  }
  const [isprofileOpen,setIsProfileOpen]=useState(false);
  const profileToggle=()=>{
    setIsProfileOpen((value)=>!value)
  }
    return (
        <div>
        <nav className="flex-row flex-center nav-bd justify-center bd-bottom">
        <Link to="/">
        <div className="flex-row gap justify-center">
          <img className="vid-logo cursor-pointer" src={logo} alt="img" />
          <h2 className="title cursor-pointer">
            <b> Rill Flix</b>
          </h2>
        </div>
        </Link>
        <div className="search-box flex-row">
          <input className="input-search" type="search" />
          <img className="search-icn" src={searchIcn} alt="search" />
        </div>
        <div className="user-profile">
          <div className="profile-set">
          <img
            className="profile-icn cursor-pointer"
            src={avatarIcn}
            alt="avatar"
            onClick={profileToggle}
          />
          </div>
          {isprofileOpen &&
          <div className="msg-box">
            <div className="triangle-box"></div>
            <div className="square-box">
              <div className="flex-col gap hover-white">
                <Link to="/signin">
                <span className="cursor-pointer"
                 onClick={()=>userHandler(checkUserStatus(authName))}
                >{checkUserStatus(authName)}</span>
                </Link>
                { authState.user ? authName.firstName :
                  <Link to="/signup">
                    <span className="cursor-pointer">Signup</span>
                  </Link>
                }
              </div>
            </div>
          </div>}
        </div>
      </nav>
        </div>
    )
}