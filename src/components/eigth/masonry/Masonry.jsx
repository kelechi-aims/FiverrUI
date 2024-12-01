import React from 'react';
import "./Masonry.scss";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Link } from "react-router-dom";
import { HiHeart, HiOutlineHeart, HiOutlineDotsHorizontal } from "react-icons/hi";


const MasonryDisplay = ({ favourites, columnsCount, gutter }) => {
  return (
    <div className='masonry'>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4, default: 4}}>
        <Masonry columnsCount={columnsCount} gutter={gutter} className="masonry-item">
           {favourites.map((favourite) => (
                <div className="item" key={favourite.id}>
                    <Link className="img-link">
                        <img src={favourite.image} alt="" className="item-image"/>
                    </Link>
                    <div className="overlay">
                        <div className="title">
                            <div className="detail">
                                <p>Featured in: <em>{favourite.title}</em></p>
                                <p>by: <em><Link className="link">{favourite.author}</Link></em></p>
                            </div>
                            <button className="dots-button">
                            <HiOutlineDotsHorizontal />
                            </button>
                        </div> 
                        <HiOutlineHeart className="heart"/>  
                        {/* <HiHeart className='heart' />*/}
                    </div>
                </div>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )          
          
}

export default MasonryDisplay
