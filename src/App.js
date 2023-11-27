import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import TutorialList from "./pages/tutorialLIst/TutorialList";
import Tutorial from "./pages/tutorial/Tutorial";
import NewTutorial from "./pages/newTutorial/NewTutorial";
import Technologie from "./pages/technologie/Technologie";
import TechnologieList from "./pages/technologieList/TechnologieList";
import Level from "./pages/level/Level";
import LevelList from "./pages/levelList/LevelList";
import NewImage from "./pages/newImage/NewImage";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container" >
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users"  element={<UserList />} />
          <Route path="/user/:userId"  element={<User />} />
          <Route path="/newUser"  element={<NewUser />} />
          <Route path="/technologies"  element={<TechnologieList />} />
          <Route path="/technologie/:technologieId"  element={<Technologie />} />
          {/* <Route path="/newTechnologie"  element={<Technologie />} /> */}
          <Route path="/tutorials"  element={<TutorialList/>} />
          <Route path="/levels"  element={<LevelList />} />
          <Route path="/level/:levelId"  element={<Level />} />
          {/* <Route path="/newLevel"  element={<Level />} /> */}
          <Route path="/tutorial/:tutorialId"  element={<Tutorial/>} />
          <Route path="/newtutorial"  element={<NewTutorial />} />
          <Route path="/newimage"  element={<NewImage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
