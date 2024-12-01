import React from 'react'
import { FaStar } from 'react-icons/fa';
import "./ReviewTable.scss";
import { reviewData } from '../../../data';
const ReviewTable = () => {
    

  return (
    <div className="reviews">
      <div className="title">Reviews</div>
      <div className="subtitle">
        <span>{reviewData.totalReviews} reviews for this Gig</span>
        <span>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <span> 4.8</span>
        </span>
      </div>
      <div className="ratings">
        <div className="left">
            {reviewData.breakdown.map((item) => (
                <table key={(item.stars)}>
                    <tr>
                        <td>
                            <button className='btn'>{item.stars} Stars</button>
                        </td>
                        <td>
                            <div className="progress-bar">
                                <div 
                                    className="filled-bar"
                                    style={{
                                        width: `${(item.count / reviewData.totalReviews) * 100}%`,
                                    }}
                                >

                                </div>
                                
                            </div>
                        </td>
                        <td>
                            <span>({item.count})</span>
                        </td>
                    </tr>
                
                </table>
            ))}
        </div>
        <div className="right">
            <h4>Rating Breakdown</h4>
            <div className="rating-details">
                {reviewData.ratingDetails.map((details) => (
                    <ul key={details.label}>
                        <li>
                            <span className="desc">
                                {details.label}
                            </span>
                            <span><FaStar /> {details.score}</span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default ReviewTable