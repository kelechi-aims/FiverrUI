import React from "react";
import "./GuideCard.scss";
import { Link } from "react-router-dom";

const GuideCard = ({ guide }) => {
  return (
    <div className="guide-card">
      <div className="guide-info">
        <Link to="/" className="guide-link link">
          <img src={guide.image} alt={guide.title} />
          <p>{guide.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default GuideCard;