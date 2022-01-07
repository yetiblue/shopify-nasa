import "./CardGrid.css";
import CardComponent from "./CardComponent.js";

function CardGrid(props) {
  //receives state: if `true` display the loader | if `false`, the grid will show
  let dataLoading = props.dataLoading;

  let cardContent = props.cardList.map((card) => (
    //loop through the API array, and create a new array
    //of the `CardComponent` component with the props passed in
    <li className="card-wrapper__li">
      <CardComponent
        cardImage={card.url}
        cardDate={card.date}
        cardTitle={card.title}
        cardDesc={card.explanation}
        cardLiked={card.liked}
        cardID={card.id}
      />
    </li>
  ));
  let content;
  if (dataLoading) {
    //show loader if true
    content = (
      <div className="loading-wrapper">
        <div className="loader"></div>
      </div>
    );
  } else {
    //show the grid if false
    content = <ul className="card-wrapper">{cardContent}</ul>;
  }
  return (
    <div className="grid-wrapper">
      <div className="category-text">
        <h1 className="category-text__header">Astronomy Photo of The Day</h1>
      </div>
      {content}
    </div>
  );
}
export default CardGrid;
