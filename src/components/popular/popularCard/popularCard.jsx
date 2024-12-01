import React from "react";
import "./popularCard.scss";
import { Link } from "react-router-dom";

const PopularCard = ({ item }) => {
  return (
    <div className={`${item.classname} card`}>
      <Link to="/categories" className={`${item.tag} link cat-link`}>
        <h3 className="title">{item.title}</h3>
        <div className="ima">
        <img src={item.image} alt={item.title} className="image"/>
        </div>
      </Link>
    </div>
  );
}
 export default PopularCard;