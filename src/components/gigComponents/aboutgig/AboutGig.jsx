import React from 'react';
import "./AboutGig.scss";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutGig = () => {
  return (
    <div className='about-gig'>
        <h2>About this gig</h2><br/>
        <p><strong>Hi Fiverr Community,</strong></p><br/>
        
        <p>Looking for a professional to <strong>design a Webflow website </strong> need to improve your existing website design?</p><br/>
        
        <p>Then cheers! You are at the right gig.</p>                        <p></p>
        <p>With over 4 years of experience, I can design modern, clean, responsive Webflow sites for you. I care deeply about helping startups express their stories through design.</p><br/>

        <p>You will get a Webflow design to take your company to the next level.</p><br/>
        
        <p><strong>This gig includes a complete professional Webflow design with the following features:</strong></p><br/>
        
        <p>High-converting Landing Page</p>
        <p>Modern, Professional, Responsive Layouts</p>                    <p>Design from Figma/sketch</p>
        <p>Responsive & SEO Friendly</p>
        <p>Fully Functional eCommerce</p>
        <p>Visually Attractive Layout</p>
        <p>Full Functional CMS</p>
        <p>Full Functional CMS</p><br/>

        <p><strong>Why Choose Us?</strong></p><br/>

        <p>Excellent Communication</p>
        <p> 24/7 Online</p>
        <p>Unlimited Revisions</p>
        <p> Free Support for 30 Days</p><br/>
        <p>Youre just a step away from getting a professional Webflow website for your business. Order now!</p>
        <hr />
        <div className="metadata">
            <ul>
                <li>
                    <p>Website type</p>
                    <ul>
                        <li>Business</li>
                    </ul>
                </li>
                <li>
                    <p>Website feature</p>
                    <ul>
                        <li>Marketing,</li>
                        <li>Payment,</li>
                        <li>Forum,</li>
                        <li>Social media,</li>
                        <li>Customer support</li>
                        <li>Inventory,</li>                                    <li>Shipping,</li>
                        <li>Analytics,</li>
                        <li>Video,</li>
                        <li>Form</li>                        
                    </ul>
                </li>
                <li>
                    <p>Plugins</p>
                        <ul>
                            <li>Brackets & Tourname,</li>
                            <li>Comparison Tables,</li>
                            <li>Image Hotspot,</li>
                            <li>Before & After Slider,</li>
                            <li>Pricing Tables,</li>
                            <li>Audio Player,</li>
                            <li>Image Hotspot</li>
                        </ul>
                </li>
            </ul>
        </div>
        <div className="disclaimer">
            <h6><IoInformationCircleSharp className='icon'/> Respect third-party rights</h6>
            <p>Please be aware that it is against Fiverr's policies for sellers to include themes, templates, or any other elements that infringe third-party rights or applicable laws in the delivered work. Read more about in our <Link className="right-link">Guide to Responsible Digital Creation</Link>.</p>
        </div>           
       
    </div>
  )
}

export default AboutGig