import React, { useState } from "react";
import "./Gigs.scss";
import { RiHome4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";
import { website_development } from "../../data";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import Dropdown from "../../components/dropdowns/gigsdropdown/Dropdown";
import DropDownItem from "../../components/dropdowns/gigsdropdown/dropdownitem/DropDownItem";
import { serviceData } from "../../gigsdropdowndata";
import GigsCardDisplay from "../../components/gigscomponents/gigscardsdisplay/GigsCardDisplay";
import FloatingBar from "../../components/gigscomponents/floatingbar/floatingcontent/FloatingBar";
import GigsBreadcrumb from "../../components/gigscomponents/breadcrumb/GigsBreadcrumb";
import HeaderCorousel from "../../components/gigscomponents/headercorousel/HeaderCorousel";


const Gigs = () => {


  return (
    <div className="gigs">
      <div className="container">
        <GigsBreadcrumb />
        <h1>Website Development</h1>
        <div className="subsection">
          <span className="subtitle">Create, build, and develop your website with skilled website developers</span>
          <span className="seperator">|</span>
          <button className="video">
            <IoPlayCircleSharp className="play"/>
            <span>How Fiverr Works</span>
          </button>
        </div>
        
        <HeaderCorousel />
        <hr />
        <FloatingBar />
        <GigsCardDisplay />

      </div>
    </div>

  )
};

export default Gigs;