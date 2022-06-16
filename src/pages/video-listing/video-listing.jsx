import { VideoCard } from "../../componentes";
import "./video-list.css";
import {Navbar,Sidebar} from "../../componentes";
import { useSearchFilter} from "../../hooks";
import {GetSearchData} from "../../hooks/utils/index"
import { useVideos } from "../../hooks/context/video-context";
export default function VideoList(){
    const {videos}=useVideos();
    const {videoState:{searchQuery}}=useSearchFilter();
    const searchData=GetSearchData(videos,searchQuery);
    return (
      <div>
        <Navbar />
        <div className="flex-row">
          <div>
            <Sidebar />
          </div>
          <div className="video-list-set bd-lft">
            <div className="chips-bar flex-row flex-wrap gap padding-md">
              <div className="chips chip-active">
                <p>All</p>
              </div>
              <div>
                <p>Movies</p>
              </div>
              <div>
                <p>Short film</p>
              </div>
              <div>
                <p>Fantacy</p>
              </div>
              <div>
                <p>Motivational</p>
              </div>
            </div>
            <div className="video-list cursor-pointer">
              {searchData.map((video) => (
                <VideoCard key={video._id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}