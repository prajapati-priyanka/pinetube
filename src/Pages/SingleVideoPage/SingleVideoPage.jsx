import "./SingleVideoPage.css";
import {
  HorizontalVideoCard,
  Navbar,
  SideNav,
  VideoPlayer,
} from "../../Components";

const SingleVideoPage = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <div className="main-container play-container">
        <div className="row">
          <VideoPlayer />
          <div className="right-sidebar">
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
            <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleVideoPage };
