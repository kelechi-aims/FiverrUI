import React from "react";
import "./Gig.scss";
import { Link } from "react-router-dom";
import ReviewTable from "../../components/gigComponents/ReviewTable/ReviewTable";
import GigBreadcrumb from "../../components/gigComponents/breadcrumb/GigBreadcrumb";
import User from "../../components/gigComponents/user/User";
import GigCorousel from "../../components/gigComponents/gigcorousel/GigCorousel";
import Sidebar from "../../components/gigComponents/sidebar/Sidebar";
import ReviewSlide from "../../components/gigComponents/reviewslides/ReviewSlide";
import AboutGig from "../../components/gigComponents/aboutgig/AboutGig";
import AboutUser from "../../components/gigComponents/aboutuser/AboutUser";
import GigPortfolio from "../../components/gigComponents/gigportfolio/GigPortfolio";
import Packages from "../../components/gigComponents/gigpackages/Packages";
import Recommended from "../../components/gigComponents/recommended/Recommended";
import Fqas from "../../components/gigComponents/fqas/Fqas";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">

        <div className="left">
            <GigBreadcrumb />
            <h1>I will design or develop webflow website, figma to webflow, webflow expert</h1>
            <User />
            <hr />
            <div className="loyalty-banner">
                <img src="/images/3-Trophy-70_alpha.gif" alt="badge" className="badge" />
                <span><b>People keep coming back!</b> pandascout has an exceptional number of repeat buyers.</span>
            </div>
            
            <GigCorousel />


            <div className="fourth">
                <h2>What people loved about this freelancer</h2>
                <Link className="all-review">See all reviews</Link>
            </div>
            <ReviewSlide />
            <AboutGig /> 
            <AboutUser />                
            <GigPortfolio />
            <Packages />
            <Recommended />
            <Fqas />
            <ReviewTable />
          </div>

        <div className="right">
            <div className="right-side">
                <Sidebar />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gig;