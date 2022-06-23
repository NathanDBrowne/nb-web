import React from "react";
import "../App.css";
import "../components/Cards/Cards.css";
import CardItem from "../components/Cards/CardItem";

function Projects() {
  return (
    <div className="cards">
      <h1>Some of my projects:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/zenobot_zoomed.png"
              text="Zeno Crypto Bot"
              label="Python Pandas Telegram OOP"
              path="/projects/linq"
            />
            <CardItem
              src="images/linq-erd-zoomed.png"
              text="LINQ Events"
              label="Flask SQL MongoDB React.js"
              path="/projects/linq"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/rust-snippet.png"
              text="Learning RustLang"
              label="Rust Cargo"
              path="/projects/rust"
            />
            <CardItem
              src="images/this-site.png"
              text="This website"
              label="React"
              path="/projects/personal-site"
            />
            <CardItem
              src="images/quant.png"
              text="Big Money Code"
              label="Quantitative analysis"
              path="/projects/big-money-code"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
