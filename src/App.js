import "./App.css";
import { Navbar,Sidebar,Footer,VideoCard } from "./componentes";
import { HomePage, LandingPage,VideoList } from "./pages";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/home" element={<HomePage/>}/>
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;
