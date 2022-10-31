import React from "react";

import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card--badge">SOLD OUT</div>
      <img src="../images/bulbasaur.png" className="card--image" />
      <div className="card--info">
        <p className="card--title">Bulbasaur</p>
        <p className="card--price">
          <img src="../images/pokedollar.png" className="card--price-icon" /> 20
        </p>
        <ul className="card--stats">
          <li>
            <span className="card--stats-title">Type:</span>{" "}
            <span className="green">Grass</span>/
            <span className="purple">Poison</span>
          </li>
          <li>
            <span className="card--stats-title">Species:</span> Seed Pokemon
          </li>
          <li>
            <span className="card--stats-title">Height</span>: 0.7 m
          </li>
          <li>
            <span className="card--stats-title">Weight:</span> 6.9 kg
          </li>
          <li>
            <span className="card--stats-title">Abilities:</span> Overgrow
          </li>
        </ul>
      </div>
    </div>
  );
}
