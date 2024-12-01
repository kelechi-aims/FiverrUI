import React from "react";
import "./GigCard.scss";
import { FaHeart} from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
    return (
        <Link to="/gig/123"className="gigs-link link">
            <div className="gigcard">
           <div className="gig-image">
                <img src={item.img} alt="" />
                <FaHeart className="heart"/>
           </div>
           <div className="author">
                <div className="author-profile">
                    <img src={item.pp} alt={item.pp} />
                    <Link className="profile-link link"><span>{item.username}</span></Link>
                </div>
                <div className="qualification">
                    <p>Level {item.level}***</p>
                </div>
           </div>
           <p>{item.desc}</p>
           <div className="star">
                <img src="./images/star.png" alt="" />
                <span className="star-average">{item.star}</span>
                <span>({item.starNumber})</span>
            </div>
            <div className="price">
                <span>From ${item.price}</span>
            </div>
            <div className="video">
            <IoVideocamOutline className="video-video"/>
                <span>Offers video consultations</span>
            </div>
        </div>
        </Link>
    )
}

export default GigCard;