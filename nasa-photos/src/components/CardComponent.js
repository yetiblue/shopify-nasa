import "./CardComponent.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function CardComponent(props) {
  //the like button is only a small part of the component
  //and is only accessed in one place. Nothing else
  //needs state, so the `useState` hook is used here instead of
  //`state` and a class component
  const [photoLiked, setPhotoLiked] = useState(false);

  let likedNotLiked; //JSX variable for toggling `like` icon
  if (photoLiked) {
    likedNotLiked = "❤️";
  } else {
    likedNotLiked = "Like";
  }

  return (
    <div className="individual-card-wrapper">
      <div className="card-photo">
        <img
          aria-labelledby="card-title"
          className="card-photo__photo"
          src={props.cardImage}
        />
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
      <h1 className="card-title"> {props.cardTitle}</h1>
      <div className="card-text">
        <p className="card-text__text">{props.cardDesc}</p>
      </div>
      <div className="bottom-button">
        <nav>
          <Link
            //using `Link`'s state object
            //to pass the card props to
            //the page with all of the data
            //of that specific card
            className="bottom-button__link"
            to={`/posts/${props.cardID}`}
            state={{
              title: props.cardTitle,
              image: props.cardImage,
              description: props.cardDesc,
              date: props.cardDate,
            }}
          >
            <button className="bottom-button__read-more">
              ᐅ Find out more{" "}
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default CardComponent;
