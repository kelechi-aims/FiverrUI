import React from "react";
import "./Slide.scss";
import { Swiper } from "swiper/react";
import 'swiper/scss';
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";

const Slide = ({ children, slidesPerView, spaceBetween, slidesPerGroup}) => {
    const handleSlideChange = (swiper) => {
        const setShowPrev = swiper.navigation.prevEl;
        const setShowNext = swiper.navigation.nextEl;
        if (swiper.isBeginning) {
            setShowPrev.style.display = "none";
        } else {
            setShowPrev.style.display = "flex";
        }
        if (swiper.isEnd) {
            setShowNext.style.display = "none";
        } else {
            setShowNext.style.display = "flex";
        }
    }


    return (
        <div className="slide">
             <Swiper 
                    modules={[Navigation]} 
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    slidesPerGroup={slidesPerGroup}
                    navigation={true}
                    onSlideChange={handleSlideChange}
                >
                    
                    {children}
                </Swiper>
        </div>
    )
}

export default Slide;