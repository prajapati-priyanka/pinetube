import { CategoryBar, PlaylistModal, VideoCard } from "../../Components";
import "./VideoListingPage.css";
import { useState } from "react";

const VideoListingPage = ({ sideNavShrinked }) => {
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false)
  return (
    <>
    <div
      className={`main-container ${
        sideNavShrinked ? "expand-main-container" : ""
      }`}
    >
      <CategoryBar />
      <div className="video-card-container">
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
          isPlaylistModalVisible={isPlaylistModalVisible}
          setIsPlaylistModalVisible={setIsPlaylistModalVisible}
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
        <VideoCard
          img="../assets/thumbnails/thumbnail.jpg"
          channelImg="../assets/channel/channel.jpg"
          desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
          videoCreator="Kapil Sharma"
          likes="15M Likes"
          views="23M Views"
        />
       
      </div>
    </div>
    {isPlaylistModalVisible && <PlaylistModal setIsPlaylistModalVisible={setIsPlaylistModalVisible} />}
    </>
  );
};

export { VideoListingPage };
