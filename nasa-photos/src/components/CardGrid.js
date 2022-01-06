import "./CardGrid.css";
import React from "react";
import axios from "axios";
import CardComponent from "./CardComponent.js";
class CardGrid extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
    const apiKey = "mzyXON84c1ODwcl3wnI9iNPdaf3kyAPEAZAG8JoX";
    const date = "202022-01-04";
    try {
      const response = await axios.get(baseUrl + apiKey);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="wrapper">
        <ul className="card-wrapper">
          <li className="card-wrapper__li">
            <CardComponent />
          </li>
        </ul>
      </div>
    );
  }
}
export default CardGrid;
