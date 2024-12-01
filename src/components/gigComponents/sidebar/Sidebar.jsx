import React, { useState } from 'react'
import { FaArrowRight, FaHeart, FaShareAlt, FaCheck } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { LuClock3 } from "react-icons/lu";
import { BiRevision } from "react-icons/bi";
import "./Sidebar.scss";
import { packages } from '../../../data';

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

const Sidebar = () => {
    const [selectedPackage, setSelectedPackage] = useState(packages[0]); // Initial selected package
    const [toggle, setToggle] =useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handlePackageClick = (packageIndex) => {
        setSelectedPackage(packages[packageIndex]);
    };
  return (
    <div className='sidebar'>
        <SocialDisplay />
        <div className="middle">
            <div className="services">
                {packages.map((pkg, index) => (
                    <div 
                        className="btn"
                        key={index}
                    >
                        <button
                        
                            className={`btn ${selectedPackage === pkg ? "selected" : ""}`}
                            onClick={() => handlePackageClick(index)}
                        >
                            {pkg.type}
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
                    <p>{selectedPackage.desc}</p>
                    <div className="duration">
                        <div className="delivery">
                            <LuClock3 />
                            <b> {selectedPackage.delivery}-day delivery</b>
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
                        {selectedPackage.features.map((item) => (
                            <li key={item}>
                                <FaCheck /> {item}
                            </li>
                        ))}
                    </ul>
                    <button className="continue">
                        <h4>Continue</h4>
                        <FaArrowRight />
                    </button>
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