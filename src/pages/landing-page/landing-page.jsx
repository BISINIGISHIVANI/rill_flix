import {bannerOne} from "../../assests";
import {annebell, minion2, elon} from "../../assests/images/thumnail";
import "./landing-page.css";
import {Navbar} from "../../componentes";
import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";
import { toast } from "react-toastify";
export default function LandingPage() {
  const navigate = useNavigate();
  const {token}=useAuth()
  const selectByCategory = (videoUrl) => {
    if(token){
      navigate("/signin");
      toast.warn("kindly login to account")
    }
    return videoUrl
  };
  return (
    <div>
      <Navbar />
      <div className="flex-row justify-center gap-md flex-center cursor-pointer">
        <div className="grid ">
          <div className="card-grid">
            <img className="banner-vid blur" src={bannerOne} alt="banner-img" />
          </div>
          <div className=" card-shortnote card-grid landing-content padding-sm">
            <div className="blur-lg card-size flex-col justify-center flex-center cursor-pointer text-center padding-sm">
              <h3 className="padding-md">
                Rill Flix <span className="hide">is video app</span>
              </h3>
              <p className="word-break">Watch trendy {"&"} classical videos</p>
              <p className="hide">anywhere anytime</p>
              <Link to="/explore">
                <button className="primary-btn btn cursor-pointer margin-md ">
                  Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center">our categories</h2>
      <div className="flex-row flex-wrap gap-md flex-center padding-md margin-md">
        <div className="grid cursor-pointer bd-sm bd-radius-sm box-shadow">
          <div className="card-grid">
            <img
              className="categories-card bd-sm bd-radius-sm"
              src={annebell}
              alt="banner-img"
            />
          </div>
          <div className="categories-shortnote card-grid padding-md">
            <p className="color-white">Movies Trailer</p>
            <button
              className="primary-btn cursor-pointer"
              onClick={() => {
                selectByCategory(navigate("/video/Wo5dMEP_BbI2"));
              }}
            >
              Play Now
            </button>
          </div>
        </div>
        <div className="grid cursor-pointer bd-sm bd-radius-sm box-shadow">
          <div className="card-grid">
            <img
              className="categories-card bd-sm bd-radius-sm"
              src={minion2}
              alt="banner-img"
            />
          </div>
          <div className="categories-shortnote card-grid padding-md">
            <p className="color-white">Animation</p>
            <button
              className="primary-btn cursor-pointer"
              onClick={() => selectByCategory(navigate("/video/Wo5dMEP_BbI11"))}
            >
              Play Now
            </button>
          </div>
        </div>
        <div className="grid cursor-pointer bd-sm bd-radius-sm box-shadow">
          <div className="card-grid">
            <img
              className="categories-card bd-sm bd-radius-sm"
              src={elon}
              alt="banner-img"
            />
          </div>
          <div className="categories-shortnote card-grid padding-md">
            <p className="color-white">Motivational</p>
            <button
              className="primary-btn cursor-pointer"
              onClick={() => selectByCategory(navigate("/video/Wo5dMEP_BbI"))}
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
