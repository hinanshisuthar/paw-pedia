import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Watchlist } from "./pages/Watch Later/Watchlist";
import { Playlist } from "./pages/Playlist/Playlist";
import { History } from "./pages/History/History";
import { LikedVideos } from "./pages/Liked Videos/LikedVideos";
import { Aside } from "./components/Aside/Aside";
import { Login } from "./pages/Authentication/Login";
import { Signup } from "./pages/Authentication/Signup";
import MockAPI from "./components/Mockman";
import { Profile } from "./pages/Profile/Profile";
import { RequiresAuth } from "./components/RequiresAuth";
import { LandingPage } from "./pages/Landing/LandingPage";
import { useData } from "./context/data-context";

function App() {
  const { sideMenu } = useData();

  return (
    <div className="App">
      <Navbar />
      <div className={sideMenu ? "grid grid-20-80" : ""}>
        {sideMenu && <Aside />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/watchlater"
            element={
              <RequiresAuth>
                <Watchlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/liked"
            element={
              <RequiresAuth>
                <LikedVideos />
              </RequiresAuth>
            }
          />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
