import React from "react";
import "./SubCategory.scss";
import { Link } from "react-router-dom";



const SubCategory = () => {
  return (
    <div className="subCategory">
      <div className="category">
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/programming-tech-thin.56382a2.svg" alt="programming-tech" />
          </div>
          <p>Programming & Tech</p>
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/graphics-design-thin.ff38893.svg" alt="graphic-design" />
          </div>
          <p>Graphic & Design</p>
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/digital-marketing-thin.68edb44.svg" alt="digital-marketing" />
          </div>
          <p>Digital Marketing</p>
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/writing-translation-thin.fd3699b.svg" alt="writing-translation" />
          </div>
          <p>Writing & Translation</p>
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/video-animation-thin.9d3f24d.svg" alt="video-animation" />
          </div>
          <p>Video & Animation</p>
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/ai-services-thin.104f389.svg" alt="ai-services" />
          </div>
          <p>AI Services</p>
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/music-audio-thin.43a9801.svg" alt="music-audio" />
          </div>
          <p>Music & Audio</p>
          
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/business-thin.885e68e.svg" alt="business" />
          </div>
          <p>Business</p>
          
        </Link>
      </div>
      <div className="menu">
        <Link className="link">
          <div className="image">
            <img src="/images/consulting-thin.d5547ff.svg" alt="consulting" />
          </div>
          <p>Consulting</p>
        </Link>
      </div>
      </div>
    </div>
  )
};

export default SubCategory;