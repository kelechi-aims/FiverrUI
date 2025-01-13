import React from "react";
import "./GigCard.scss";
import { FaHeart} from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";



const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
          newRequest.get(`/users/${item.userId}`).then((res) =>
            res.data,
          ),
      })
      console.log(data)

      const navigate = useNavigate();

      const goToGig = () => {
        navigate()
      }

      const goToProfile = () => {

      }

    return (
        <Link to={`/gig/${item._id}`} className="gigs-link link">
            <div className="gigcard">
                    <div className="gig-image">
                        <img src={item.cover} alt="" />
                        <FaHeart className="heart"/>
                    </div>
                <div className="author">
                    {isLoading ? (
                        "Loading"
                    ) : error ? (
                        "Something went wrong!"
                    ) : (
                    <div className="author-profile">
                        <img src={data.img || "/images/noavatar.jpg"} alt={item.pp} />
                        <div onClick={goToProfile} className="profile-link link"><span>{item.username}</span></div>
                    </div>
                )}
                    <div className="qualification">
                        <p>Level {item.level}***</p>
                    </div>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <img src="./images/star.png" alt="" />
                    <span className="star-average">
                        {!isNaN(item.totalStars / item.starNumber) &&
                        Math.round(item.totalStars / item.starNumber)}</span>
                    <span>({item.totalStars})</span>
                </div>
                <div className="price">
                    <span>From ${item.price}</span>
                </div>
                <div className="video">
                <IoVideocamOutline className="video-video"/>
                    <span>Offers video consultations</span>
                </div>
            </div>
        </Link>
    )
}

export default GigCard;