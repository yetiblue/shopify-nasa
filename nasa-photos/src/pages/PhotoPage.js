import React from "react";
import axios from "axios";
import CardGrid from "../components/CardGrid.js";
class PhotoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
    };
  }
  async componentDidMount() {
    //exposing my Api Key here since the data being accessed is public
    //Normally it would go in an .env file on the server-side, but since
    //this page is just client-side, it's not possible to hide them.
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
    const apiKey = "mzyXON84c1ODwcl3wnI9iNPdaf3kyAPEAZAG8JoX";
    const date = "202022-01-04";
    let loopArray = [];
    try {
      const response = await axios.get(baseUrl + apiKey);
      console.log(response.data, "response");
      const cardArray = response.data;
      //looping through 6 times to get enough cards to populate
      //a little grid
      for (let i = 0; i < 6; i++) {
        loopArray.push(cardArray);
      }
      console.log(loopArray, "looparray");
      //   //mutate loopArray so that each object contains a 'liked' field
      //   //this will allow individual cards to be liked
      //   loopArray.forEach((object) => {
      //     object.liked = "false";
      //   });
      //insert loopArray into State, so that it can be sent as a prop
      this.setState({ cardList: loopArray });
    } catch (error) {
      console.log(error, "error");
    }
  }

  render() {
    return (
      <div classname="wrapper">
        <CardGrid cardList={this.state.cardList} />
      </div>
    );
  }
}
export default PhotoPage;
