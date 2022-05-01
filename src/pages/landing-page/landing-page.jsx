import { banner } from "../../assests/icons/icon";
import "./landing-page.css";
import { Link } from "react-router-dom";
export default function LandingPage(){
    return (
        <div className="flex-row justify-center gap-md flex-center">
            <div className="padding-md landing-content">
                <h2 className="padding-md">Rill Flix is video APP</h2>
                <p>Watch anywhere anytime</p>
                <Link to="/home">
                <button className="primary-btn cursor-pointer margin-md">Watch Now</button>
                </Link>
            </div>
            <img className="banner-vid"src={banner} alt="banner-img"/>
        </div>
    )
}