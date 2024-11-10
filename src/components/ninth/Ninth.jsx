import React from "react";
import "./Ninth.scss";
import { guides } from "../../data";
import { SwiperSlide } from "swiper/react";
import GuideCard from "./guide/GuideCard";
import { Link } from "react-router-dom";
import Slide from "../slide/Slide";

const Ninth = () => {
    const guideItems = guides.map((guide) => (
        <SwiperSlide key={guide.id}>
            <GuideCard guide={guide} />
        </SwiperSlide>
    ))
    return (
        <div className="ninth">
            <div className="container">
               <div className="items">
                  <div className="top">
                    <h2>Guides to help you grow</h2>
                    <Link className="ninth-link">See more</Link>
                  </div>
                  <Slide slidesPerView={3} spaceBetween={20} className="slid">
                     {guideItems}
                  </Slide>
               </div>
            </div>
        </div>
    )
}

export default Ninth;