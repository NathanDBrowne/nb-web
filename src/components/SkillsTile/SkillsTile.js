import React from "react";
import { Link } from "react-router-dom";

function SkillsTile(props) {
  return (
    <>
      <li className="tile__item">
        <a className="tile__item__link" to={props.path}>
          <h1>{props.title}</h1>
          <figure className="tile__item__pic-wrap" data-category={props.label}>
            <img className="tile__item__img" alt="Tile" src="images/tile.PNG" />
          </figure>
          <div className="tile__item__info">
            <h5 className="tile__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default SkillsTile;
