import { createContext, useState, useContext } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [allVideo, setAllVideo] = useState([]);
  return (
    <VideoContext.Provider value={{ allVideo, setAllVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
