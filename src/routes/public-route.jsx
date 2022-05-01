import {Routes,Route} from "react-router-dom";
import { Navbar,Footer } from "../componentes";
import { HomePage , LandingPage } from "../pages";
import { SignInPage,SignUpPage,ForgotPage  } from "../pages/authentication";
export default function PublicRoute(){
    return (
        <div>
            <Routes>
               <Route path="/" element={<LandingPage/>}/>
               <Route path="/home" element={<HomePage/>}/>
               <Route path="/signin"element={<SignInPage/>}/>
               <Route path="/signup"element={<SignUpPage/>}/>
               <Route path="/forgotpassword"element={<ForgotPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}