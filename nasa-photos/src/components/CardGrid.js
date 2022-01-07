import "./CardGrid.css";
import CardComponent from "./CardComponent.js";
function CardGrid(props) {
  console.log(props.cardList, "props");
  let dataLoading = props.dataLoading;
  console.log(dataLoading, "data loading");

  let testMap = props.cardList.map((card) => (
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
    content = (
      <div className="loading-wrapper">
        <div className="loader"></div>
      </div>
    );
  } else {
    content = <ul className="card-wrapper">{testMap}</ul>;
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
