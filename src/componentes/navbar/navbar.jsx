import {avatarIcn,logo,searchIcn} from "../../assests/icons/icon";
import { useState } from "react";
import "./navbar.css";
export default function Navbar(){
  const [isprofileOpen,setIsProfileOpen]=useState(false);
  const profileToggle=()=>{
    setIsProfileOpen((value)=>!value)
  }
    return (
        <div>
        <nav className="flex-row flex-center nav-bd justify-center bd-bottom">
        <div className="flex-row gap justify-center">
          <img className="vid-logo cursor-pointer" src={logo} alt="img" />
          <h2 className="title cursor-pointer">
            <b> Rill Flix</b>
          </h2>
        </div>
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
                <span className="cursor-pointer">Login</span>
                <span className="cursor-pointer">Settings</span>
              </div>
            </div>
          </div>}
        </div>
      </nav>
        </div>
    )
}