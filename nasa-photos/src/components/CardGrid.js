import "./CardGrid.css";
import CardComponent from "./CardComponent.js";
function CardGrid(props) {
  console.log(props.cardList, "props");

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

  return (
    <div className="grid-wrapper">
      <div className="category-text">
        <h1 className="category-text__header">Astronomy Photo of The Day</h1>
      </div>

      <ul className="card-wrapper">{testMap}</ul>
    </div>
  );
}
export default CardGrid;
