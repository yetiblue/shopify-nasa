import React from "react";
import axios from "axios";
import CardGrid from "../components/CardGrid.js";
import "./PhotoPage.css";
class PhotoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      //defaut start set of dates to display upon first page load
      //will be updated by the date picker form
      startDate: "2021-12-05",
      endDate: "2022-01-05",
    };
    this.axiosGetFunction = this.axiosGetFunction.bind(this);
    this.getNewDates = this.getNewDates.bind(this);
  }
  async componentDidMount() {
    this.axiosGetFunction();
  }
  async axiosGetFunction() {
    //exposing my Api Key here since the data being accessed is public
    //Normally it would go in an .env file on the server-side, but since
    //this page is just client-side, it's not possible to hide them.
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";
    const apiKey = "mzyXON84c1ODwcl3wnI9iNPdaf3kyAPEAZAG8JoX";
    const date = "202022-01-04";
    let loopArray = [];
    console.log();
    try {
      //   const response = await axios.get(baseUrl + apiKey);
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod/?api_key=mzyXON84c1ODwcl3wnI9iNPdaf3kyAPEAZAG8JoX",
        {
          params: {
            start_date: this.state.startDate,
            end_date: this.state.endDate,
          },
        }
      );

      console.log(response.data, "response");
      const cardArray = response.data;
      this.sendAsProps(cardArray);
    } catch (error) {
      console.log(error, "error");
    }
  }
  //give each object an ID that I can use later for navigation
  sendAsProps(data) {
    data.forEach((object, incValue) => {
      object.id = incValue + 1;
    });

    //insert loopArray into State, so that it can be sent as a prop
    this.setState({ cardList: data });
  }
  //makes another GET call with newly selected dates
  async getNewDates() {
    const startDate = document.querySelector("#start");
    const endDate = document.querySelector("#end");
    //the API will throw an error if the start Date is empty
    //the end date can be left empty, it'll just default to the
    //current date
    if (startDate.value == "") {
      this.setState(
        { startDate: this.state.startDate, endDate: endDate.value },
        this.axiosGetFunction
      );
    } else {
      this.setState(
        { startDate: startDate.value, endDate: endDate.value },
        this.axiosGetFunction
      );
    }
  }
  render() {
    return (
      <div className="photopage-wrapper">
        <div className="date-wrapper">
          <p className="date-wrapper__start">Start Date</p>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-12-05"
            max="2022-01-10"
          />
          <p className="date-wrapper__end">End Date</p>
          <input
            type="date"
            id="end"
            name="trip-start"
            min="2021-12-05"
            max="2022-01-10"
          />

          <button className="search-button" onClick={this.getNewDates}>
            Search
          </button>
        </div>

        <CardGrid cardList={this.state.cardList} />
      </div>
    );
  }
}
export default PhotoPage;
