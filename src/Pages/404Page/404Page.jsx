
import "./404Page.css"
   

const  NotFound =() => {
  return (
    <div className="not-found flex-container">
      <img src="./assets/thumbnails/404-img.svg" alt="" className="404-image img-responsive" />
      <p className="link-to-home lg-text">
        Let's go <a href=""> home </a> and and try from there...
      </p>
    </div>
  );
}

export {NotFound}