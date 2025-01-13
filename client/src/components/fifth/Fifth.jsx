import React from "react";
import "./Fifth.scss";
import { services } from "../../data";
import { SwiperSlide } from "swiper/react";
import Slide from "../slide/Slide";
import FifthCard from "./fifthCard/FifthCard";


const Fifth = () => {
    const servicesItem = services.map((item) => (
        <SwiperSlide key={item.id}>
            <FifthCard service={item} />
        </SwiperSlide>
    ));
    return (
        <div className="fifth">
            <div className="container">
                <h3>Vontélle’s go-to services</h3>
                <div className="items">
                    <div className="item-container">
                        <Slide slidesPerView={4.5} spaceBetween={10} slidesPerGroup={4.5} className="slid">
                            {servicesItem}
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fifth;