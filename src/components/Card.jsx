import React from "react";

import "../styles.css";

function Card(props) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card container-fluid">
        <span>{props.emoji}</span>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
