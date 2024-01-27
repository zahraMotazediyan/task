import './App.css';
import Login from "./pages/Login";
import {Route, Routes} from "react-router-dom";
import Guide from "./pages/Guide";
import BichonPiRules from "./pages/BichonPiRules";
import MainPage from "./pages/MainPage";
import UserProfile from "./pages/UserProfile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/bichonPiRules" element={<BichonPiRules/>}/>
                <Route path="/guide" element={<Guide/>}/>
                <Route path="/mainPage" element={<MainPage/>}/>
                <Route path="/userProfile" element={<UserProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
