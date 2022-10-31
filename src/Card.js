import React from "react";

import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--badge">SOLD OUT</div>
      <img src={props.img} className="card--image" />
      <div className="card--info">
        <p className="card--title">{props.title}</p>
        <p className="card--price">
          <img src="../images/pokedollar.png" className="card--price-icon" />{" "}
          {props.price}
        </p>
        <ul className="card--stats">
          <li>
            <span className="card--stats-title">Type:</span>{" "}
            <span className="green">{props.type}</span>
            <span className="purple"></span>
          </li>
          <li>
            <span className="card--stats-title">Species:</span> {props.species}
          </li>
          <li>
            <span className="card--stats-title">Height</span>: {props.height} m
          </li>
          <li>
            <span className="card--stats-title">Weight:</span> {props.weight} kg
          </li>
          <li>
            <span className="card--stats-title">Abilities:</span>{" "}
            {props.abilities}
          </li>
        </ul>
      </div>
    </div>
  );
}
