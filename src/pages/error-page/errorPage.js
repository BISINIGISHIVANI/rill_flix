import "./errorPage.css";
import { errorImg} from "../../assests";
import { Link } from "react-router-dom";
export default function  ErrorPage(){
  return (
    <div className="error-page-container">
      <div className="card-grid">
        <img className="error-img" src={errorImg} alt="404" />
      </div>
      <div className="card-grid align-md text-center">
        <h3>Page not Found</h3>
        <Link to="/">
          <button className="button-md cursor-pointer">Back to Home </button>
        </Link>
      </div>
    </div>
  );
};

