import React from "react";
import "./CharCard.css";

const CharCard = props => (
  <div className="card">
    <div className="img-container" dataid={props.id} onClick={() =>
    props.randomRender(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharCard;
