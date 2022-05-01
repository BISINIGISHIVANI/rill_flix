import { VideoCard } from "../../componentes";
import "./video-list.css";
export default function VideoList(){
    return (
        <div className="video-list-set">
            <div className="chips-bar flex-row gap padding-md bd-bottom margin-md">
                <div className="chip chip-active">
                    <p>All</p>
                </div>
                <div>
                    <p>short films</p>
                </div>
                <div>
                    <p>Movie</p>
                </div>
                <div>
                    <p>Fantacy</p>
                </div>
            </div>
            <div className="video-list cursor-pointer">
                {[1,2,3,4,5,6,7,8].map((id)=>(
                    <VideoCard key={id}/>
                ))}
            </div>
        </div>
    )
}