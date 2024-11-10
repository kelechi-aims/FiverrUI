import React from "react";
import "./FifthCard.scss";
import { Link } from "react-router-dom";

const FifthCard = ({ service }) => {
   return (
     <div className="fifthcard">
       <div className="fifthy">
         <Link to="/" className="link service-link">
           <img src={service.image} alt={service.title} />
           <p>{service.title}</p>
         </Link>
       </div>
     </div>
   )
}

export default FifthCard;