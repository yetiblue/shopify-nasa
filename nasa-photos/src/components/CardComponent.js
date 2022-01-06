import "./CardComponent.css";
import { useState } from "react";

function CardComponent(props) {
  const [photoLiked, setPhotoLiked] = useState(false);

  let likedNotLiked;
  console.log(photoLiked, "photoLiked");
  if (photoLiked) {
    likedNotLiked = "Liked";
  } else {
    likedNotLiked = "Like";
  }

  return (
    <div className="individual-card-wrapper">
      <div className="card-photo">
        <img className="card-photo__photo" src={props.cardImage} />
      </div>
      <div className="share-like">
        <p className="title-date__date">{props.cardDate}</p>
        <button className="share-like__share"> Share </button>
        <button
          className="share-like__like"
          onClick={() => {
            setPhotoLiked(!photoLiked);
          }}
        >
          {likedNotLiked}
        </button>
      </div>
      <h1 className="title-date__title"> {props.cardTitle}</h1>
      <div className="card-text">
        <p className="card-text__text">{props.cardDesc}</p>
      </div>
      <div className="bottom-button">
        <button className="bottom-button__read-more"> ᐅ Find out more</button>
      </div>
    </div>
  );
}
export default CardComponent;
