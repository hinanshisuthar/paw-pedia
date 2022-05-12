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
import { PlaylistVideos } from "./pages/Playlist/components/PlaylistVideos";
import { SingleVideoPage } from "./pages/single video page/SingleVideoPage";

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
          <Route
            path="/playlist/:playListId"
            element={
              <RequiresAuth>
                <PlaylistVideos />
              </RequiresAuth>
            }
          />
          <Route
            path="/playlist"
            element={
              <RequiresAuth>
                <Playlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequiresAuth>
                <History />
              </RequiresAuth>
            }
          />
          <Route path="/video/:videoId" element={<SingleVideoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<MockAPI />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
