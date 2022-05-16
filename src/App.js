import "./App.css";
import {
  Home,
  SingleVideoPage,
  PlaylistPage,
  SinglePlaylistPage,
  NotFound,
  Liked,
  WatchLater,
  History,
  Login,
  Signup,
} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./Router/RequiresAuth";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/singlevideopage" element={<SingleVideoPage />} />
        <Route path="/singleplaylistpage" element={<SinglePlaylistPage />} />
        <Route
          path="/liked"
          element={<RequiresAuth children={<Liked />}></RequiresAuth>}
        />
        <Route
          path="/watchlater"
          element={<RequiresAuth children={<WatchLater />}></RequiresAuth>}
        />
        <Route
          path="/history"
          element={<RequiresAuth children={<History />}></RequiresAuth>}
        />
        <Route
          path="/playlists"
          element={<RequiresAuth children={<PlaylistPage />}></RequiresAuth>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={"colored"}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
    
    />
    </>
  );
}

export default App;
