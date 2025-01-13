import React, { useState } from 'react';
import './GigCorousel.scss';
import { SwiperSlide } from 'swiper/react';
import Slide from '../../slide/Slide';
import 'swiper/css/pagination';

const GigCorousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0); // Track the active slide
    

  return (
    <div className='gigcorousel'>
        <Slide 
            slidesPerView={1} 
            slidesPerGroup={1} 
            className="slid"
            spaceBetween={10}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
            onInit={(swiper) => setActiveIndex(swiper.activeIndex)} // Set initial active index
            // pagination={{
            //     el: ".custom-pagination",
            //     clickable: true,
            //     renderBullet: (index, className) => {
            //         return '<img src="${gigcorouseldata[index].image}" class="' + className + '">' + (index + 1) + "</span>";
            //     },
            // }}
        >
           {items.images.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item} alt="" />
                </SwiperSlide>
           ))}
        </Slide>

        {/* Custom Pagination */}
        <div className="custom-pagination">
            {items.images.map((item, index) => (
                <span
                    key={index}
                    className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => {
                        document.querySelector(".swiper").swiper.slideTo(index);
                    }}
                >
                    <img src={item} alt="" />
                </span>
            ))}
        </div>
    </div>
  )
}

export default GigCorousel