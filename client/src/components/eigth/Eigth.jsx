import React from "react";
import "./Eigth.scss";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
import { favourites } from "../../data";
import MasonryDisplay from "./masonry/Masonry";

const Eigth = () => {
    return (
        <div className="eigth">
            <div className="container">
                <h2>Made on Fiverr</h2>
                <MasonryDisplay favourites={favourites} columnsCount={4} gutter="1rem"/>
            </div>
        </div>
    )
}

export default Eigth;