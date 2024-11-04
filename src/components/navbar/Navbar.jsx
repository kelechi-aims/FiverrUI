import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { FaBell, FaEnvelope, FaHeart, FaSearch, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const scrollContainerRef = useRef(null);
  const [isExplore, setIsExplore] = useState(false);
  const [isFiverr, setIsFiverr] = useState(false);

  // Toggle function explore
  const toggleExplore = () => {
    setIsExplore(!isExplore);
  };

  // Toggle function for fiverr pro
  const toggleFiverr = () => {
    setIsFiverr(!isFiverr);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      handleScroll();
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    // Cleaner function
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  },[]);

  const currentUser = {
    id: 1,
    username: "John Doe",
    registered: false,
    isSeller: true
  }

    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
          <div className="header">
          <div className="container">
            <div className="logo">
              <Link to="/" className="link">
                <span className="text">fiverr</span>
              </Link>
              <span className="dot">.</span>
            </div>
            {(currentUser || active) && (
              <div className="search-bar">
                <input className="search-input"
                  type="search" 
                  placeholder="What service are younlooking for today"/>
                <button className="search-button">
                  <FaSearch/>
                </button>
              </div>
            )}
            <div className="links">
              {currentUser?.registered ? (
                <>
                <FaBell />
                <FaEnvelope />
                <FaHeart />
                <span>Orders</span>
                <div className="user" onClick={()=>setOpen(!open)}>
                  <img src="https://images.pexels.com/photos/27919253/pexels-photo-27919253/free-photo-of-red-glitter-frames-a-striking-accent-for-the-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <span>{currentUser?.username}</span>
                
                  {open && <div className="options">
                  {
                    currentUser?.isSeller && (
                      <>
                        <span className="item">Gigs</span>
                        <span className="item">Add New Gig</span>                    
                      </>
                    )
                  }
                  <Link className="link item" to="/profile">Profile</Link>
                  <span>Post a project brief</span>
                  <Link className="link item" to="/briefs">Your briefs</Link>
                  <Link className="link item" to="/referral_program">Refer a Friend</Link>
                  <hr />
                  <Link className="link item" to="/start_selling">Become a Seller</Link>
                  <Link className="link item" to="/edit/account">Settings</Link>
                  <Link className="link item" to="/billing">Billing and payments</Link>
                  <hr />
                  <span className="item">English</span>
                  <span className="item">USD</span>
                  <Link className="link item" to="/hc/en-us">Help & support</Link>
                  <hr />
                  <span className="item"><b>Exclusive features</b></span>
                  <span className="item">Invite your team</span>
                  <span className="item">Hire on an hourly basis</span>
                  <span className="item">Earn Fiverr credits</span>
                  <hr />
                  <span>logout</span>
                </div>
                }
              </div>
                </>
              ) : (
                <>
                <button className="dropdown-button" onClick={toggleFiverr}>
                  Fiverr Pro
                {isFiverr ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Fiverr pro dropdown content goes here */}
                {isFiverr && (
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <span role="img" aria-label="Looking to Hire">👀</span>
                      <div>
                        <strong>I'm looking to hire</strong>
                        <p>My team neads vetted freelance talent and a premium business solution.</p>
                      </div>
                    </div>
                   <div className="dropdown-item">
                     <span role="img" aria-label="Looking to Hire">👀</span>
                      <div>
                        <strong>I'm looking to hire</strong>
                        <p>My team neads vetted freelance talent and a premium business solution.</p>
                      </div>
                    </div>
                  </div>
                )}
                <button className="dropdown-button" onClick={toggleExplore}>
                  Explore
                {isExplore ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Explore dropdown content */}
                {isExplore && (
                  <div className="Explore-content">
                    <ul>
                      <li>
                        <span>Answers</span>
                        <p>Powered by AI, answered by fiverr freelancers</p>
                      </li>
                      <li>
                        <span>Community</span>
                        <p>Connect with Fiverr's team and community</p>
                      </li>
                      <li>
                        <span>Guides</span>
                        <p>In-depth guides covering business topics</p>
                      </li>
                      <li>
                        <span>Podcasts</span>
                        <p>Inside tips from business minds</p>
                      </li>
                      <li>
                        <span>Learn</span>
                        <p>Professional online courses, led by experts</p>
                      </li>
                      <li>
                        <span>Blog</span>
                        <p>News, information and community stories</p>
                      </li>
                      <li>
                        <span>Logo Maker</span>
                        <p>Create your logo instantly</p>
                      </li>                      
                    </ul>

                  </div>
                )}
                <span>English</span>
                <span>Become a Seller</span>
                <span>Sign in</span>
                <button className="join">Join</button>
                </>
              )}
            </div>
          </div>
          </div> 
          <div className="topmostmenu">            
              {(active || pathname !=="/") && (
                <div className="topmenu">
                <>
                <div className="menu">
                <Carousel
                  showThumbs={false}
                  showIndicators={false}
                  showStatus={false}
                  centerMode
                  centerSlidePercentage={12}
                  swipeable
                  emulateTouch
                  showArrows
                  
                >
                  
                    <div><Link className="link innermenu" to="/">Graphics & Design</Link></div>
                    <div><Link className="link innermenu" to="/">Programming & Tech</Link></div>
                    <div><Link className="link innermenu" to="/">Digital Marketing</Link></div>
                    <div><Link className="link innermenu" to="/">Video & Animation</Link></div>
                    <div><Link className="link innermenu" to="/">Writing & Translation</Link></div>
                    <div><Link className="link innermenu" to="/">Music & Audio</Link></div>
                    <div><Link className="link innermenu" to="/">Business</Link></div>
                    <div><Link className="link innermenu" to="/">Finance</Link></div>
                    <div><Link className="link innermenu" to="/">AI Services</Link></div>
                    <div><Link className="link innermenu" to="/">Personal Growth</Link></div>
                    <div><Link className="link innermenu" to="/">Consulting</Link></div>
                    <div><Link className="link innermenu" to="/">Photography</Link></div>
                  
                </Carousel>
                </div>
                </>
                </div>  
              )}
            </div>
                
          
        </div>
    );
};

export default Navbar;
