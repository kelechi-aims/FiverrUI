import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="item">
                        <h6>Categories</h6>
                        <Link className="link">Graphics & Design</Link>
                        <Link className="link">Digital Marketing</Link>
                        <Link className="link">Writing & Translation</Link>
                        <Link className="link">Video & Animation</Link>
                        <Link className="link">Music & Audio</Link>
                        <Link className="link">Programming & Tech</Link>
                        <Link className="link">AI Services</Link>
                        <Link className="link">Consulting</Link>
                        <Link className="link">Data</Link>
                        <Link className="link">Business</Link>
                        <Link className="link">Personal Growth & Hobbies</Link>
                        <Link className="link">Photography</Link>
                        <Link className="link">Finance</Link>
                        <Link className="link">End-to-End Projects</Link>
                        <Link className="link">Service Catalog</Link>
                    </div>
                    <div className="item">
                        <h6>For Clients</h6>
                        <Link className="link">How Fiverr Works</Link>
                        <Link className="link">Customer Success Stories</Link>
                        <Link className="link">Trust & Safety</Link>
                        <Link className="link">Quality Guide</Link>
                        <Link className="link">Fiverr Learn <br/>
                            <em>Online Courses</em></Link>
                        <Link className="link">Fiverr Guides</Link>
                        <Link className="link">Fiverr Answers</Link>    
                    </div>
                    <div className="item">
                        <h6>For Freelancer</h6>
                        <Link className="link">Become a Fiverr Freelancer</Link>
                        <Link className="link">Become an Agency</Link>
                        <Link className="link">Kickstart</Link>
                        <Link className="link">Community Hub</Link>
                        <Link className="link">Forum</Link>
                        <Link className="link">Events</Link>
                    </div>
                    <div className="item">
                         <h6>Business Solutions</h6>
                         <Link className="link">Fiverr Pro</Link>
                         <Link className="link">Project Management <br/>Service</Link> 
                         <Link className="link">ClearVoice<br />
                             <em>Content Marketing</em></Link> 
                         <Link className="link">Working Not Working <br />
                             <em>Creative Talent</em></Link> 
                         <Link className="link">AutoDS <br />
                             <em>Dropshipping Tool</em></Link> 
                         <Link className="link">Fiverr Logo Maker</Link> 
                         <Link className="link">Contact Sales</Link>  
                    </div>
                    <div className="item">
                        <h6>Company</h6>
                        <Link className="link">About Fiverr</Link>
                        <Link className="link">Help & Support</Link>
                        <Link className="link">Social Impact</Link>
                        <Link className="link">Careers</Link>
                        <Link className="link">Terms of Service</Link>
                        <Link className="link">Privacy Policy</Link>
                        <Link className="link">Partnerships</Link>
                        <Link className="link">Creator Network</Link>
                        <Link className="link">Affiliates</Link>
                        <Link className="link">Invite a Friend</Link>
                        <Link className="link">Press & News</Link>
                        <Link className="link">Investor Relations</Link>
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h6>fiverr</h6>
                        <span>© Fiverr International Ltd. 2024</span>
                    </div>
                    <div className="right">
                        <div className="social">
                            <ul>
                                <li><img src="/images/t.svg" alt="twitter" /></li>
                                <li> <img src="/images/facebook.png" alt="facebbook" /></li>
                                <li><img src="/images/linkedin.png" alt="linkedin" /></li>
                                <li><img src="/images/pinterest.png" alt="pinterest" /></li>
                                <li><img src="/images/instagram.png" alt="intagram" /></li>
                            </ul>
                        </div>
                        <div className="link">
                            <img src="/images/language.png" alt="language" />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <span>$ USD</span>
                        </div>
                        <div className="access">
                            <img src="/images/accessibility.png" alt="accessibility" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;