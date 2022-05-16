import "./App.css";
import {Home, SingleVideoPage, PlaylistPage, SinglePlaylistPage, NotFound, Liked, WatchLater, History, Login, Signup } from "./Pages";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlists" element={<PlaylistPage />} />
        <Route path="/singlevideopage" element={<SingleVideoPage />} />
        <Route path="/singleplaylistpage" element={<SinglePlaylistPage />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    
    </div>
  );
}

export default App;
