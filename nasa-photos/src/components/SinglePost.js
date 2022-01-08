import React from "react";
import "./SinglePost.css";

class SinglePost extends React.Component {
  constructor(props) {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    //data = `modalOpen` from CardComponent.js
    // setData = `setModalopen` from CardComponent.js
    //When `setData` changes the state of `data`, it's
    //passed back up to CardComponent, and that toggles the
    //modal
    let [data, setData] = this.props.closeModal;
    setData(!data);
  }
  render() {
    return (
      <div className="single-view__wrapper">
        <button
          type="button"
          className="single-view__back"
          onClick={this.closeModal}
        >
          ←
        </button>

        <div className="single-view-grid">
          <div className="single-view__image">
            <img
              className="single-view__image__img"
              src={this.props.cardImage}
            ></img>
          </div>
          <div className="single-view__content">
            <div className="centered-content">
              <h1 className="centered-content__title">
                {this.props.cardTitle}
              </h1>
              <p> {this.props.cardDate}</p>
              <p>{this.props.cardDesc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //   }
}
export default SinglePost;
