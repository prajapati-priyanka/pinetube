import { VideoCard } from "../../Components";
import "./VideoListingPage.css";

const VideoListingPage = ({ sideNavShrinked }) => {
  return (
    <div
      className={`main-container ${
        sideNavShrinked ? "expand-main-container" : ""
      }`}
    >
      <div className="video-card-container">
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
  );
};

export { VideoListingPage };
