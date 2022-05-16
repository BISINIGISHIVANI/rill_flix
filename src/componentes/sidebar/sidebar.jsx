import "./sidebar.css";
import { ExploreIcn,historyIcn,likedIcn,moreIcn,watchlaterIcn} from "../../assests/icons/icon";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarToggle = useCallback(() => setSideBar((value) => !value),[]);
  return (
    <div>
      <aside className="sidebar-content">
        <ul className="flex-col gap-md flex-center cursor-pointer ">
          <div className="flex-row gap list-none">
            <div className="flex-col icon-set" onClick={sideBarToggle}>
            <Link to="/home">
              <li><img  src={ExploreIcn}alt="explore-icon" /></li></Link>
              <li><img  src={historyIcn} alt="toggle-icn" /></li>
              <Link to="/watchlater">
              <li><img  src={watchlaterIcn}alt="toggle-icn" /></li></Link>
              <Link to="/likes"><li><img src={likedIcn}alt="toggle-icn"/></li></Link>
              <li><img src={moreIcn}alt="toggle-icn"/></li>
            </div>
            {sideBar && (
              <div className="flex-col icn-content">
                <Link to="/home">
                <li className="margin-top"> Explore</li> </Link>
                <li>History</li>
                <Link to="/watchlater">
                <li> Watchlater</li>
                </Link>
                <Link to="/likes">
                <li>Liked videos</li></Link>
                <li>Playlists</li>
              </div>
            )}
          </div>
          
        </ul>
      </aside>
    </div>
  );
}
