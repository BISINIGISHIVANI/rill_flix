import { banner } from "../../assests/icons/icon";
import { Navbar ,Sidebar} from "../../componentes";
export const SinglePlaylistPage = () => {
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
               Videos<span>.Updated today</span>
            </h3>
          </div>
          <div className="mg-sm">
          </div>
        </div>
      </div>
    </div>
  );
};
