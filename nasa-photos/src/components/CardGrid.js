import "./CardGrid.css";
import CardComponent from "./CardComponent.js";
function CardGrid(props) {
  console.log(props.cardList, "props");

  let testMap = props.cardList.map((card) => (
    <li>
      <CardComponent
        cardImage={props.cardList[0].url}
        cardDate={props.cardList[0].date}
        cardTitle={props.cardList[0].title}
        cardDesc={props.cardList[0].explanation}
      />
    </li>
  ));

  return (
    <div className="wrapper">
      <ul className="card-wrapper">{testMap}</ul>
    </div>
  );
}
export default CardGrid;
