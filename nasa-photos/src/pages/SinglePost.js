import React from "react";
import "./SinglePost.css";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SinglePost(props) {
  //access the `useLocation` hook to get the State object
  //that was passed via the <Link> tag
  const location = useLocation();
  const navigate = useNavigate();

  let data = location.state;

  return (
    <div className="single-view__wrapper">
      <button className="single-view__back" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="single-view-grid">
        <div className="single-view__image">
          <img className="single-view__image__img" src={data.image}></img>
        </div>
        <div className="single-view__content">
          <div className="centered-content">
            <h1>{data.title}</h1>
            <p> {data.date}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
  //   }
}
export default SinglePost;
