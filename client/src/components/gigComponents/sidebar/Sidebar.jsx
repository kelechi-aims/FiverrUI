import React, { useState } from 'react'
import { FaArrowRight, FaHeart, FaShareAlt, FaCheck } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { LuClock3 } from "react-icons/lu";
import { BiRevision } from "react-icons/bi";
import "./Sidebar.scss";
import { Link } from 'react-router-dom';

const SocialDisplay = () => {
    const [likes, setLikes] = useState(755); // Initial like count
    const [liked, setLiked] = useState(false); // State for like

    // Handle like button click
    const handleLike = () => {
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
        setLiked(!liked);
    }

    return (
        <div className="social">
            <div 
                className={`like-btn ${liked ? "like" : ""}`}
                onClick={handleLike}
            > 
                <FaHeart className='heart'/> 
                <span className='count'>{likes}</span>
            </div>
            <div className="share-btn">
                <span className='share'><FaShareAlt /></span>
            </div>
        </div>
    )
}

const Sidebar = ({ data, gigId }) => {
    const [selectedPackage, setSelectedPackage] = useState(data.packages[0]); // Initial selected package
    const [toggle, setToggle] =useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handlePackageClick = (packageIndex) => {
        setSelectedPackage(data.packages[packageIndex]);
    };
  return (
    <div className='sidebar'>
        <SocialDisplay />
        <div className="middle">
            <div className="services">
                {data.packages.map((pkg, index) => (
                    <div 
                        className="btn"
                        key={index}
                    >
                        <button
                        
                            className={`btn ${selectedPackage === pkg ? "selected" : ""}`}
                            onClick={() => handlePackageClick(index)}
                        >
                            {pkg.name}
                        </button>
                    </div>
                    
                ))}
            </div>
            <div className="content">
                {selectedPackage && (
                    <>
                        <div className="title">
                        <p>{selectedPackage.title}</p>
                        <span className="price">${selectedPackage.price}</span>
                </div>
                <div className="desc">
                    <p>{selectedPackage.description}</p>
                    <div className="duration">
                        <div className="delivery">
                            <LuClock3 />
                            <b> {selectedPackage.deliveryTime}-day delivery</b>
                        </div>
                        <div className="delivery">
                            <BiRevision />
                            <b> limited Revisions</b>
                        </div>
                    </div>
                    <button 
                        className="included"
                        onClick={handleToggle}
                    >
                        <b>What's Included</b>
                        {toggle ? 
                            <FaAngleDown /> : <FaAngleUp />
                        }
                    </button>
                    <ul
                        className={`features ${toggle ? "show" : ""}`}
                    >
                        {Object.entries(selectedPackage.features).map((item, index) => (
                            <li key={index}>
                                <FaCheck /> {item}
                            </li>
                        ))}
                    </ul>
                    <Link className="link" to={`/pay/${gigId}/${selectedPackage.price}`}>
                        <button className="continue">
                            <h4>Continue</h4>
                            <FaArrowRight />
                        </button>
                    </Link>
                    <p className="packages">
                        Compare packages
                    </p>
                </div>
                    </>
                )}
            </div>
        </div>

        <div className="bottom">
            <button className="contact">
                <h4>Contact me</h4>
                <FaAngleDown />
            </button>
        </div>

    </div>
  )
}

export default Sidebar