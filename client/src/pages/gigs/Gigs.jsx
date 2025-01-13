import React, { useState } from "react";
import "./Gigs.scss";
import { IoPlayCircleSharp } from "react-icons/io5"
import 'swiper/scss';
import "swiper/scss/navigation";
import GigsCardDisplay from "../../components/gigscomponents/gigscardsdisplay/GigsCardDisplay";
import FloatingBar from "../../components/gigscomponents/floatingbar/floatingcontent/FloatingBar";
import GigsBreadcrumb from "../../components/gigscomponents/breadcrumb/GigsBreadcrumb";
import HeaderCorousel from "../../components/gigscomponents/headercorousel/HeaderCorousel";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
 

const Gigs = () => {

  const { search } = useLocation();


  const { isLoading, error, data } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}`).then((res) =>
        res.data,
      ),
  })
  console.log(data);


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
        {isLoading 
          ? "Loading" 
          : error 
          ? "Something went wrong!" 
          : <GigsCardDisplay gigs={data}/>
        }

      </div>
    </div>

  )
};

export default Gigs;