import React from "react";
import "./Featured.scss";
import { FaSearch } from "react-icons/fa";

const Featured = ()=> {
    return (
        <div className="featured">
            <div className="container">
                <div></div>
                
                <div className="hero-section">
                    {/* Hero text */}
                  <h1 className="hero-text">Scale your professional workforce with <i className="highligt">freelancers</i></h1>
                
                  {/* Search bar */}
                  <div className="search-bar">
                     <input type="text" placeholder="Search for any service..." />
                     <button className="search-button">
                       <FaSearch />
                     </button>
                  </div>
                </div>
                
                {/* Trusted logos */}
                <div className="trusted-logos">
                    <span>Trusted by:</span>
                    <ul>
                    <li><img src="/images/meta.ff37dd3.svg" alt="Meta" /></li>
                    <li><img src="/images/google.e74f4d9.svg" alt="Google" /></li>
                    <li><img src="/images/netflix.b310314.svg" alt="Netflix" /></li>
                    <li><img src="/images/pg.22fca85.svg" alt="P&G" /></li>
                    <li><img src="images/paypal.d398de5.svg" alt="PayPal" /></li>
                    <li><img src="/images/payoneer.7c1170d.svg" alt="Payoneer" /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
};

export default Featured;