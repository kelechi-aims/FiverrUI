import React from 'react'
import { Link } from 'react-router-dom';
import { LuSparkle } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import "./User.scss";

const User = ({ dataUser, data }) => {
  return (
    <div className="user">
        <img src={dataUser.img || "/images/noavatar.jpg"} alt="John Doe" />
        
        <div className="details">
            <div className="top">
                <Link className="link user-link">
                    <span>{dataUser.username}</span>
                </Link>
                <div className="choice">
                    <span className="fiverr">
                        Fiverr's
                    </span>
                    <span className="choose">
                        Choice
                    </span>
                </div>
                <div className="level">
                    <span>Level {data.level}</span>
                    {Array(data.level).fill().map((_, i) => (
                        <span>{data.level > 0 ? <LuSparkle key={i}/> : <LuSparkle className='spankel'/>}</span>
                    ))}

                </div>
                
                <span className="divider">|</span>
                <span className="queue">20 orders in queue</span>
            </div>
            <div className="bottom">
                
                <div className="stars">
                {!isNaN(data.totalStars / data.starNumber) && (
                  <>
                  {Array(Math.round(data.totalStars / data.starNumber))
                    .fill()
                    .map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <div className="star-count">
                        <span>{Math.round(data.totalStars / data.starNumber)}</span>
                    </div>
                  </>
                  )}
                    <Link className="review"><span >({data.totalReviews} reviews)</span></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default User