import React from 'react';
import './GigPortfolio.scss';
import { AiOutlinePicture } from "react-icons/ai";


const GigPortfolio = () => {
  return (
    <div className='gig-portfolio'>
        <h2>My Portfolio</h2>
        <div className="portfolio">
            <div className="left">
                <img src="/images/professional-seo-optimized-webflow-website.png" alt="" />
                <div className="more">
                    <AiOutlinePicture /> 3
                </div>
            </div>
            <div className="right">
                <div className="top">
                    <p className='from'>From: January 2024</p>
                    <h2>SOSPRINT Websit Design</h2>
                    <p className='desc'>SOSPRINT is an office accessories shop. I designed this website and</p>
                    <div className="store">
                        <p>Office Supply Store</p>
                        <p>+4</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="cost">
                        <p>Project cost</p>
                        <strong>$600-$800</strong>
                    </div>
                    <div className="cost">
                        <p>Duration</p>
                        <strong>7-30 days</strong>
                    </div>
                </div>
            </div>
        </div>
        <div className="projects">
            <img src="/images/professional-seo-optimized-webflow-website.png" alt="" />
            <img src="/images/professional-seo-optimized-webflow-website.png" alt="" />
            <img src="/images/professional-seo-optimized-webflow-website.png" alt="" />
            <img src="/images/professional-seo-optimized-webflow-website.png" alt="" />
            <div className="more">
                <p>+7</p>
                <p>Projects</p>
            </div>
        </div>

    </div>
  )
}

export default GigPortfolio;