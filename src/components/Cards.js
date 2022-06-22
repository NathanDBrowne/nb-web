import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Top upcoming events:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Melvin gets baptised in a freaking waterfall!"
              label="Irresponsible"
              path="/events"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Tax Evasion seminar"
              label="Bring you own coke"
              path="/events"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Cannibal hunting in Bermuda"
              label="Drum and Bass"
              path="/events"
            />
            <CardItem
              src="images/img-4.jpg"
              text="England u11 squad vs England Womens National Team"
              label="Comedy"
              path="/events"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Getting wasted in the desert"
              label="Yin Yang"
              path="/events"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
