import React from "react";
import "./Popular.scss";
import Slide from "../slide/Slide";
import { cards } from "../../data";
import PopularCard from "./popularCard/popularCard";
import { SwiperSlide } from "swiper/react";

const Popular = () => {

  const cardItems = cards.map((card) => (
    <SwiperSlide key={card.id}>
      <PopularCard item={card} />
    </SwiperSlide>
  ));

  return (
    <div className="popular">
      <div className="container">
        <h2>Popular Services</h2>
        <div className="swiper-popular">
           <Slide slidesPerView={5.5} spaceBetween={16} slidesPerGroup={5} className="slid">
             {cardItems}             
           </Slide>
                    
        </div>

      </div>
    </div>
  );
};

export default Popular;