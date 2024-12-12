import React, { useState } from 'react';
import './ReviewSlide.scss';
import { SwiperSlide } from 'swiper/react';
import Slide from '../../slide/Slide';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';
import Review from '../review/Review';

const ReviewSlide = ({ gigId }) => {

    const queuryClient = useQueryClient();
    
    const { isLoading, error, data } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
          newRequest.get(`/reviews/${gigId}`).then((res) =>
            res.data,
          ),
    });  
    
    const mutation = useMutation({
        mutationFn: (review) => {
          return newRequest.post('/reviews', review)
        },
        onSuccess: () => {
          queuryClient.invalidateQueries(['reviews'])
        }
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({ gigId, description, star })
    }

  return (
    <div className='reviews'>
        {isLoading ? (
            "Loading"
        ) : error ? (
            "Something went wrong"            
        ) : (
            <Slide className="review-slide">
            {data.map((review) => (
                <SwiperSlide key={review._id}>
                <Review review={review}/>
            </SwiperSlide>
            ))}
            </Slide>
        )} 
        <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type='submit' >Send</button>
        </form>
      </div>    
    </div>
  )
}

export default ReviewSlide