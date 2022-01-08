import React from "react";
import axios from "axios";
import CardGrid from "../components/CardGrid.js";
import "./PhotoPage.css";
class PhotoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      //defaut start set of dates to display upon first page load.
      //Will be updated by the date picker form
      startDate: "2021-12-05",
      endDate: "2022-01-05",
      loading: true,
    };
    this.axiosGetFunction = this.axiosGetFunction.bind(this);
    this.getNewDates = this.getNewDates.bind(this);
    this.hideDateMenu = this.hideDateMenu.bind(this);
    this.showDateMenu = this.showDateMenu.bind(this);
  }
  componentDidMount() {
    //Displays the full set of data based on the hard-coded
    //start and end dates in State with every reload.
    this.axiosGetFunction();
    document.getElementsByClassName("date-wrapper-mobile")[0].style.display =
      "none";
  }
  async axiosGetFunction() {
    //exposing my Api Key here since the data being accessed is public
    //Normally it would go in an .env file on the server-side, but since
    //this page is just client-side, it's not possible to hide them.
    try {
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "mzyXON84c1ODwcl3wnI9iNPdaf3kyAPEAZAG8JoX",
          start_date: this.state.startDate,
          end_date: this.state.endDate,
        },
      });
      this.setState({ loading: false }); //once the data is fetched, turn loading off
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
  async getNewDates(dateObject) {
    const startDate = document.querySelector(dateObject.start);
    const endDate = document.querySelector(dateObject.end);
    //The API will throw an error if the start Date is empty.
    //The end date can be left empty, it'll just default to the
    //current date

    if (startDate.value === "") {
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
  hideDateMenu() {
    document.getElementsByClassName("date-wrapper-mobile")[0].style.display =
      "none";
    document.getElementsByClassName("show-dates-button")[0].style.display = "";
  }
  showDateMenu() {
    document.getElementsByClassName("date-wrapper-mobile")[0].style.display =
      "";
    document.getElementsByClassName("show-dates-button")[0].style.display =
      "none";
  }

  render() {
    //mobile and desktop date pickers have different ID's.
    //Set the ID values in an object, and then pass it into
    //getNewDates() where querySelector() is used to get the
    //date value
    let startEnd = { start: "#start", end: "#end" };
    let startEndMobile = { start: "#start-mobile", end: "#end-mobile" };
    return (
      <div className="photopage-wrapper">
        <div className="date-wrapper">
          <label className="date-wrapper__start">Start Date</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2021-12-05"
            max="2022-01-10"
          />
          <label className="date-wrapper__end">End Date</label>
          <input
            type="date"
            id="end"
            name="trip-start"
            min="2021-12-05"
            max="2022-01-10"
          />

          <button
            className="search-button"
            onClick={() => this.getNewDates(startEnd)}
          >
            <label className="search-label"> Search</label>
          </button>
        </div>
        {/* --------- Mobile Date Drawer ----------- */}
        <div className="date-wrapper-mobile">
          <label className="date-wrapper__start">Start Date</label>
          <input
            type="date"
            id="start-mobile"
            name="trip-start"
            min="2021-12-05"
            max="2022-01-10"
          />
          <label className="date-wrapper__end">End Date</label>
          <input
            type="date"
            id="end-mobile"
            name="trip-start"
            min="2021-12-05"
            max="2022-01-10"
          />

          <button
            className="search-button"
            onClick={() => this.getNewDates(startEndMobile)}
          >
            <label className="search-label"> Search</label>
          </button>
          <button className="hide-button" onClick={this.hideDateMenu}>
            <label> Hide ^</label>
          </button>
        </div>
        <div className="show-dates-mobile">
          <button className="show-dates-button" onClick={this.showDateMenu}>
            <label className="show-dates-label">Change Dates ⇩</label>
          </button>
        </div>
        <CardGrid
          dataLoading={this.state.loading}
          cardList={this.state.cardList}
        />
      </div>
    );
  }
}
export default PhotoPage;
