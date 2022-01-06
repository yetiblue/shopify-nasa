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
    <div>
      <h1>{data.title}</h1>
    </div>
  );
  //   }
}
export default SinglePost;
