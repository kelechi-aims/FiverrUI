import React from 'react'
import { Link } from 'react-router-dom';
import { LuSparkle } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import "./User.scss";

const User = () => {
  return (
    <div className="user">
        <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="John Doe" />
        
        <div className="details">
            <div className="top">
                <Link className="link user-link">
                    <span>John Doe</span>
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
                    <span>Level 2</span>
                    <span><LuSparkle /><LuSparkle /><LuSparkle className='spankel'/></span>
                </div>
                
                <span className="divider">|</span>
                <span className="queue">20 orders in queue</span>
            </div>
            <div className="bottom">
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <div className="star-count">
                        <span>5</span>
                    </div>
                    <Link className="review"><span >(381 reviews)</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User