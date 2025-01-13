import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { website_development } from '../../../data';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";
import "./HeaderCorousel.scss";

const HeaderCorousel = () => {

  return (
    <div className="gigs-corousel">
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={6}
            slidesPerGroup={6}
            navigation={true}
            className="corousel"
        >
              
        {website_development.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide className="slider" key={index}>
                <div className="fitting">
                    <Link className="corousel-link link" to="/gig/123">
                    <div className="card" key={item.id}>
                        <div className="card-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <span className="card-title">{item.title}</span>
                      </div>
                    </Link>
                    </div>
                  </SwiperSlide>
                ))}
                           

        </Swiper>  
    </div>
  )
}

export default HeaderCorousel