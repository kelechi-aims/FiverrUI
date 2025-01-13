import React from "react";
import "./Third.scss";

const Third = () => {
    return (
        <div className="third">
            <div className="container">
                <div className="menu">
                    <div className="first">
                      <div className="fiverrpro">
                        <span className="fiverr">fiverr </span>
                        <span className="pro">pro</span>
                        <span className="dot">.</span>
                      </div>  
                      <h2>The <em>premium</em> freelance solution for businesses</h2>
                      <div className="items">
                      <div className="item">
                        <div className="dedicate">
                            <img src="./images/check.png" alt="" />
                            <h6>Dedicated hiring experts</h6>
                        </div>
                        <p>Count on an account manager to find you the right talent and see to your project’s every need.</p>
                      </div>
                      <div className="item">
                        <div className="dedicate">
                            <img src="./images/check.png" alt="" />
                            <h6>Satisfaction guarantee</h6>
                        </div>
                        <p>Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.</p>
                      </div>
                      <div className="item">
                        <div className="dedicate">
                            <img src="./images/check.png" alt="" />
                            <h6>Advanced management tools</h6>
                        </div>
                        <p>Seamlessly integrate freelancers into your team and projects.</p>
                      </div>
                      <div className="item">
                        <div className="dedicate">
                            <img src="./images/check.png" alt="" />
                            <h6>Flexible payment models</h6>
                        </div>
                        <p>Pay per project or opt for hourly rates to facilitate longer-term collaboration.</p>
                      </div>
                      </div>
                      <div className="button">
                        <button>Try Now</button>
                      </div>
                    </div>
                    <div className="second">
                      <img src="./images/fiverr-pro.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third;