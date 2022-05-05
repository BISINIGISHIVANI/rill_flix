import "./sidebar.css";
import { ExploreIcn,historyIcn,likedIcn,moreIcn,watchlaterIcn} from "../../assests/icons/icon";
import { useState, useCallback } from "react";
export default function Sidebar() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarToggle = useCallback(() => setSideBar((value) => !value),[]);
  return (
    <div>
      <aside className="sidebar-content">
        <ul className="flex-col gap-md flex-center cursor-pointer ">
          <div className="flex-row gap list-none">
            <div className="flex-col icon-set" onClick={sideBarToggle}>
              <li><img  src={ExploreIcn}alt="explore-icon" /></li>
              <li><img  src={historyIcn} alt="toggle-icn" /></li>
              <li><img  src={watchlaterIcn}alt="toggle-icn" /></li>
              <li><img src={likedIcn}alt="toggle-icn"/></li>
              <li><img src={moreIcn}alt="toggle-icn"/></li>
            </div>
            {sideBar && (
              <div className="flex-col icn-content">
                <li className="margin-top"> Explore</li>
                <li>History</li>
                <li> Watchlater</li>
                <li>Liked videos</li>
                <li> More <i class="fa-solid fa-circle-chevron-down"></i></li>
                <div>
                  <li>Kids</li>
                  <li>Shorts</li>
                </div>
              </div>
            )}
          </div>
          
        </ul>
      </aside>
    </div>
  );
}
