import React from "react";
import CardComponent from "../components/CardComponent.js";
import { useLocation } from "react-router-dom";

// class SinglePost extends React.Component {
//   constructor(props) {
//     super();
//   }
function SinglePost(props) {
  const location = useLocation();
  let data = location.state;

  //   render() {
  return (
    <div className="single-view-grid">
      <div className="single-view__image">
        <img src={data.image}></img>
      </div>
      <div className="single-view__content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
  //   }
}
export default SinglePost;
