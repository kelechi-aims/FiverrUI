import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { FaBell, FaEnvelope, FaHeart, FaSearch, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoGlobeOutline } from "react-icons/io5";
import 'swiper/scss';
import { Navigation } from "swiper/modules";
import 'swiper/scss/navigation';
import newRequest from '../../utils/newRequest';

// Define the categories
const categories = [
  "Graphics & Design", "Programming & Tech", "Digital Marketing",
  "Video & Animation", "Writing & Translation", "Music & Audio",
  "Business", "Finance", "AI Services", "Personal Growth",
  "Consulting", "Photography"
];

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const scrollContainerRef = useRef(null);
  const [isExplore, setIsExplore] = useState(false);
  const [isFiverr, setIsFiverr] = useState(false);
  const exploreRef = useRef(null);
  const fiverrRef = useRef(null);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const isSearch = () => {
    window.scrollY > 300 ? setSearch(true) : setSearch(false);
  }

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  }
  

  const handleSlideChange = (swiper) => {
     // Show prev button if we're past the first slide
     const setShowPrev = swiper.navigation.prevEl;
     const setShowNext = swiper.navigation.nextEl;
     if (swiper.isBeginning) {
      setShowPrev.style.display = 'none';
     }
     if (swiper.activeIndex > 0) {
      setShowPrev.style.display = 'block';
     }

     if (swiper.isEnd) {
      setShowNext.style.display = 'none';
     }
     if (swiper.activeIndex < swiper.slides.length - 1) {
      setShowNext.style.display = 'block';
     }
   }

  // Toggle function explore
  const toggleExplore = () => {
    setIsExplore(!isExplore);
    setIsFiverr(false)
  };

  // Toggle function for fiverr pro
  const toggleFiverr = () => {
    setIsFiverr(!isFiverr);
    setIsExplore(false)
  };

  

   // Detect clicks outside of dropdowns to close them
   const handleClickOutside = (event) => {
    if (
      exploreRef.current && !exploreRef.current.contains(event.target)
    ) {
      setIsExplore(false);
    }
    if (
      fiverrRef.current && !fiverrRef.current.contains(event.target)
    ) {
      setIsFiverr(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  const isActive = () => {
    window.scrollY > 700 ? setActive(true) : setActive(false);
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

  useEffect(() => {
    window.addEventListener("scroll", isSearch)
    // Cleaner function
    return () => {
      window.removeEventListener("scroll", isSearch);
    };
  },[])

  

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate('/');
      // localStorage.removeItem("currentUser");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <div className={active || pathname !=="/" ? "navbar active search" : "navbar"}>
          <div className="header">
          <div className="container">
            <div className="logo">
              <Link to="/" className="link">
                <span className="text">fiverr</span>
              </Link>
              <span className="dot">.</span>
            </div>
            {(search || pathname !=="/") && (
              <div className="search-bar">
                <input className="search-input"
                  type="search" 
                  placeholder="What service are younlooking for today"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="search-button" onClick={handleSubmit}>
                  <FaSearch/>
                </button>
              </div>
            )}
            <div className="links">
              {currentUser ? (
                <>
                <FaBell />
                <Link to="/messages" className="link"><FaEnvelope /></Link>
                <FaHeart />
                <Link to="/orders" className="link"><span>Orders</span></Link>
                <div className="user" onClick={()=>setOpen(!open)}>
                  <img src={currentUser.img || "/images/noavatar.jpg"} alt="" />
                  <span>{currentUser?.username}</span>
                
                  {open && <div className="options">
                  {
                    currentUser?.isSeller && (
                      <>
                        <Link className="link" to="/mygigs"><span className="item">Gigs</span></Link>
                        <Link className="link" to="/add"><span className="item">Add New Gig</span></Link>                    
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
                  <Link className="link" onClick={handleLogout}><span>logout</span></Link>
                </div>
                }
              </div>
                </>
              ) : (
                <>
                <button ref={fiverrRef} className="dropdown-button" onClick={toggleFiverr}>
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
                <button ref={exploreRef} className="dropdown-button" onClick={toggleExplore}>
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
                <div className="lang"><IoGlobeOutline className="globe"/><span>English</span></div>
                <span>Become a Seller</span>
                <Link to="/login" className="link"><span>Sign in</span></Link>
                <Link className="link" to="/register">
                  <button className="join">Join</button>
                </Link>
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
                  <Swiper
                    modules={[Navigation]} // Import the Navigation module
                    slidesPerView={9} // Number of items view
                    spaceBetween={29} // Space between items
                    slidesPerGroup={9} // Number of items per group
                    className="category-carousel"
                    navigation = {{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}// Enable navigation arrows
                    onSlideChange={handleSlideChange}
                  >
                    {categories.map((category, index) => (
                      <SwiperSlide key={index}>
                        <Link className="link innermenu" to="/">{category}</Link>
                      </SwiperSlide>
                    ))}
                     <div className="swiper-button-prev"></div>
                     <div className="swiper-button-next"></div>
                  </Swiper>
                </div>
                </>
                </div>
              )}
            </div>
                
          
        </div>
    );
};

export default Navbar;
