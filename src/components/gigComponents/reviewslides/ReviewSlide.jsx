import React from 'react';
import './ReviewSlide.scss';
import { SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';
import Slide from '../../slide/Slide';
import { Link } from 'react-router-dom';

const ReviewSlide = () => {
  return (
    <div className='review'>
        <Slide className="review-slide">
            <SwiperSlide>
                <div className="item">
                    <div className="image">
                        <img src="/images/pexels-alexander-suhorucov-6457507.jpg" alt="" />
                    </div>
                    <div className="user">
                        <div className="details">
                            <h6>Jane Deo</h6>
                            <img src="/images/1f1e9-1f1ea.png" alt="" />
                            <p>Germany</p>
                            <span className="divider">|</span>
                            <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>5</span>
                            </div>
                        </div>
                        <p>Ala did an EXCEPTIONAL job on our website development! The final result is very good. Even though, we did not provide the clearest briefing, Ala delivered a... <Link className="see-more-link"> See more</Link></p>
                        <time datetime="2022-02-14 20:00">February 14, 2022, 8:00 PM</time>
                    </div>
                </div>
            </SwiperSlide>
        </Slide>     
    </div>
  )
}

export default ReviewSlide