import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Watchlist } from "./pages/Watch Later/Watchlist";
import { Playlist } from "./pages/Playlist/Playlist";
import { History } from "./pages/History/History";
import { LikedVideos } from "./pages/Liked Videos/LikedVideos";
import { Aside } from "./components/Aside/Aside";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlater" element={<Watchlist />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/liked" element={<LikedVideos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
