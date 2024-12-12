import React from 'react';
import './AboutUser.scss';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { LuSparkle } from 'react-icons/lu';

const AboutUser = ({ dataUser, data }) => {
  return (
    <div className='about-user'>
        <h2><span>Get to know {dataUser.username}</span></h2>
        <div className="user-again">
            <img src={dataUser.img || "/images/noavatar.jpg"} alt="" />
            <div className="info">
                <div className="name">
                    <Link className="user-link">{dataUser.username}</Link>
                    <div className="fiverr">
                        <span className="white">Fiverr's </span>
                        <span className="green">Choice</span>
                    </div>
                </div>
                <p>{dataUser.desc}</p>
                <div className="grade">
                {!isNaN(data.totalStars / data.starNumber) && (
                  <>
                  {Array(Math.round(data.totalStars / data.starNumber))
                    .fill()
                    .map((_, i) => (
                        <FaStar key={i} className='star'/>
                    ))}
                    <strong>{Math.round(data.totalStars / data.starNumber)}</strong>
                    <span className='count'>({data.totalStars})</span>
                  </>
                  )}
                    
                    <div className="level">
                        <span>Level {data.level} </span>
                        <span><LuSparkle className='stta'/><LuSparkle className='stta'/><LuSparkle className='stta'/><LuSparkle /></span>
                    </div>
                </div>
            </div>
        </div>
        <button className="contact-me">Contact me</button>
        <div className="address-desc">
            <div className="address">
                <div className="from">
                    <p>From</p>
                    <strong>{dataUser.country}</strong>
                </div>
                <div className="from">
                    <p>Member since</p>
                    <strong>Jan 2022</strong>
                </div>
                <div className="from">
                    <p>Avg. response time</p>
                    <strong>1 hour</strong>
                </div>
                <div className="from">
                    <p>Last delivery</p>
                    <strong>1 hour ago</strong>
                </div>
                <div className="from">
                    <p>Languages</p>
                    <strong>English</strong>
                </div>
            </div>
            <hr />
            <div className="desc">
                <p>Hello, this is Ala Uddin. I'm a certified Website developer and designer with 4+ years of experience. I've expertise in WebFlow, WordPress, and GoDaddy platforms. Also, WebFlow CMS integration and interaction and animation specialist. I have built many websites on different platforms with user-friendly interfaces and responsiveness on all devices. I have worked from simple to complex but stunning website designs. All your Website solutions are here. Don't look for further contact now for a free consultation.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUser;