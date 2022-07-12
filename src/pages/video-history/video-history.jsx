import{ useHistory} from "../../hooks/context/history-context"
import {useAuth} from "../../hooks/context/auth-context";
import {banner} from "../../assests/icons/icon";
import {deleteAllHistory} from "../../services/history.services"
import { HistoryCard } from "./history-card";
import {Navbar, Sidebar} from "../../componentes/index";
export const VideoHistoryPage=()=>{
     const {
       authState: {token},
     } = useAuth();
    const {historyState:{history},historyDispatch}=useHistory();
    const deleteAllHistoryHandler=()=>{
        deleteAllHistory(token,historyDispatch)
    }
    return (
      <div>
        <Navbar />
        <div className="flex-row">
          <div>
            <Sidebar />
          </div>
          <div className="flex-row flex-wrap gap-md flex-space-between">
            <div className="bd-lft mg-sm">
              <img className="hr-img" src={banner} alt="video-playlist" />
              <h3>
                {history.length} Videos<span>.Updated today</span>
              </h3>
              {history.length>0?
              <button className="primary-btn cursor-pointer"onClick={deleteAllHistoryHandler}>clear all history</button>
              :""}
            </div>
            <div className="mg-sm">
              {history.length > 0 ? (
                history.map((item) => {
                  return (
                    <div key={item._id}>
                      <HistoryCard key={item._id} {...item} />
                    </div>
                  );
                })
              ) : (
                <h1>No history videos</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
