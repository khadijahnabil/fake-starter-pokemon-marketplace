import React from "react";

import "./Card.css";

export default function Card(props) {
  let badgeText;
  if (props.stock === 0) {
    badgeText = "SOLD OUT";
  } else if (props.stock === 1) {
    badgeText = "LAST STOCK!";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.img} className="card--image" />
      <div className="card--info">
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <img src="../images/pokedollar.png" className="card--price-icon" />{" "}
          {props.price}
        </p>
        <ul className="card--stats">
          <li>
            <span className="card--stats-title">Type:</span> {props.stats.type}
          </li>
          <li>
            <span className="card--stats-title">Species:</span>{" "}
            {props.stats.species}
          </li>
          <li>
            <span className="card--stats-title">Height</span>:{" "}
            {props.stats.height} m
          </li>
          <li>
            <span className="card--stats-title">Weight:</span>{" "}
            {props.stats.weight} kg
          </li>
          <li>
            <span className="card--stats-title">Abilities:</span>{" "}
            {props.stats.abilities}
          </li>
        </ul>
      </div>
    </div>
  );
}
