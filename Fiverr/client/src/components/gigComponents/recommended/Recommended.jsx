import React from 'react';
import './Recommended.scss';
import { gigs } from "../../../data";
import Slide from "../../../components/slide/Slide";
import { SwiperSlide } from "swiper/react";
import GigCard from "../../../components/gigCard/GigCard";
import { Link } from 'react-router-dom';

const Recommended = () => {

  return (
    <>
    <div className="recommended">
        <h2><span>Recommended for you</span></h2>
        <div className="options">
            <Slide slidesPerGroup={2} slidesPerView={2} spaceBetween={10}>
                {gigs.map((card) => (
                    <SwiperSlide>
                    <GigCard key={card.id} item={card} />
                    </SwiperSlide>
                ))}
            </Slide>
        </div>
    </div>

    <h2 className="more-service-title">Other Website Development Services I Offer</h2>
    <div className="other-websites">
        <div className="websites">
          <Link className='link other-website-link'>
              <p>Custom Websites</p>
              Starting at $85
          </Link>
        </div>
        <div className="websites">
          <Link className='link other-website-link'>
              <p>GoDaddy</p>
              Starting at $90
          </Link>
        </div>
    </div>
    </>
  );
}

export default Recommended;