import { banner } from "../../assests/icons/icon";
import "./landing-page.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../componentes";
export default function LandingPage(){
    return (
        <div>
            <Navbar/>
            <div className="flex-row justify-center gap-md flex-center">
            <div className="padding-md landing-content">
                <h2 className="padding-md">Rill Flix is video APP</h2>
                <p className="padding-md">Watch anywhere anytime</p>
                <Link to="/explore">
                <button className="primary-btn cursor-pointer margin-left">Watch Now</button>
                </Link>
            </div>
            <img className="banner-vid"src={banner} alt="banner-img"/>
            </div>
        </div>
    )
}