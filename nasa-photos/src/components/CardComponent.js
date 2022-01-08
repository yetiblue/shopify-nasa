import "./CardComponent.css";
import { useState } from "react";
import SinglePost from "./SinglePost.js";

function CardComponent(props) {
  //`useState` is more convinient here with [modalOpen, setModalOpen]
  //compared to this.state. Keeping this component as a function
  //component since there also aren't any methods that need calling.
  const [modalOpen, setModalOpen] = useState(false);
  const [photoLiked, setPhotoLiked] = useState(false);

  //JSX variable for toggling `like` icon
  let likedNotLiked;
  if (photoLiked) {
    likedNotLiked = "❤️";
  } else {
    likedNotLiked = "Like";
  }
  //disable scrolling on body when the modal is open
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  //variable for storing the modal component
  let renderModal;
  if (!modalOpen) {
  } else {
    renderModal = (
      <SinglePost
        closeModal={[modalOpen, setModalOpen]} //allows `SinglePost` to change value of `modalOpen`
        cardImage={props.cardImage}
        cardDate={props.cardDate}
        cardTitle={props.cardTitle}
        cardDesc={props.cardDesc}
        cardLiked={props.cardLiked}
        cardID={props.cardID}
      />
    );
  }
  return (
    <div>
      {renderModal}
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
            <button
              className="bottom-button__read-more"
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            >
              <label> ᐅ Find out more</label>
            </button>
            {/* </Link> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
export default CardComponent;
