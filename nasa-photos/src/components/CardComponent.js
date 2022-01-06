import "./CardComponent.css";

function CardComponent(props) {
  return (
    <div className="wrapper">
      <div className="card-photo">
        <img
          className="card-photo__photo"
          src="https://apod.nasa.gov/apod/image/2006/OrionMountains_Tabbush_2048.jpg"
        />
      </div>
      <div className="share-like">
        <p className="title-date__date">This is the Date</p>
        <button className="share-like__share"> Share </button>
        <button className="share-like__like"> Like </button>
      </div>
      <h1 className="title-date__title"> A Blue Hour Full Moon Rover</h1>
      <div className="card-text">
        <p className="card-text__text">
          This is going to be the text This is going to be the text This is
          going to be the text This is going to be the text This is going to be
          the text This is going to be the text This is going to be the text
          This is going to be the text This is going to be the text This is
          going to be the text This is going to be the text This is going to be
          the text This is going to be the text This is going to be the text
          This is going to be the text This is going to be the text This is
          going to be the text This is going to be the text
        </p>
      </div>
      <div className="bottom-button">
        <button className="bottom-button__read-more"> ᐅ Find out more</button>
      </div>
    </div>
  );
}
export default CardComponent;
