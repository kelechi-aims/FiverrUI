import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import "./Review.scss";
import newRequest from '../../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';


const Review = ({ review }) => {
    const descMaxLength = 100;
    const [showFull, setShowFull] = React.useState(false);
    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const { isLoading, error, data } = useQuery({
        queryKey: [review.userId],
        queryFn: () =>
          newRequest.get(`/users/${review.userId}`).then((res) =>
            res.data,
          ),
    });

  return (
    <div className='review'>
        {isLoading ? (
            "Loading"
        ) : error ? (
            "Something went wrong"
        ) : (
            <div className="item">
                    <div className="image">
                        <img src={data.img || "/images/noavatar.jpg"} alt="" />
                    </div>
                    <div className="user">
                        <div className="details">
                            <h6>{data.username}</h6>
                            {/* <img src="/images/1f1e9-1f1ea.png" alt="" /> */}
                            <p>{data.country}</p>
                            <span className="divider">|</span>
                            <div className="star">
                                {Array(review.star).fill().map((item, i) => (
                                    <FaStar key={i}/>
                                ))}
                                <span>{review.star}</span>
                            </div>
                        </div>
                        <p>{showFull 
                            ? review.description 
                            : review.description.slice(0, descMaxLength) +
                            (review.description.length > descMaxLength ? "..." : "")
                        }<Link 
                            className="see-more-link"
                            onClick={toggleShowFull}
                        >{showFull ? " See less" : " See more"}
                        </Link></p>
                        {moment(review.updatedAt).fromNow()}
                    </div>
                </div>

        )}
    </div>
  )
}

export default Review