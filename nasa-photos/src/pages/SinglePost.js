import React from "react";
import "./SinglePost.css";
import { useLocation } from "react-router-dom";

function SinglePost(props) {
  const location = useLocation();
  let data = location.state;

  //   render() {
  return (
    <div className="single-view-grid">
      <div className="single-view__image">
        <img className="single-view__image__img" src={data.image}></img>
      </div>
      <div className="single-view__content">
        <h1>{data.title}</h1>
        <p> {data.date}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
  //   }
}
export default SinglePost;
