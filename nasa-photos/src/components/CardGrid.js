import "./CardGrid.css";
import CardComponent from "./CardComponent.js";
function CardGrid(props) {
  console.log(props.cardList, "props");

  let testMap = props.cardList.map((card) => (
    <li className="card-wrapper__li">
      <CardComponent
        cardImage={props.cardList[0].url}
        cardDate={props.cardList[0].date}
        cardTitle={props.cardList[0].title}
        cardDesc={props.cardList[0].explanation}
        cardLiked={props.cardList[0].liked}
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
