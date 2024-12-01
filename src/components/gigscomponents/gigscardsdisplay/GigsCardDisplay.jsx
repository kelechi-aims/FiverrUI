import React, { useState } from 'react';
import { gigs } from "../../../data";
import GigCard from '../../gigCard/GigCard';
import Dropdown from '../../dropdowns/gigsdropdown/Dropdown';
import DropDownItem from '../../dropdowns/gigsdropdown/dropdownitem/DropDownItem';
import { sorts } from "../../../gigsdropdowndata";
import "./GigsCardsDisplay.scss";
import { FaCheck } from "react-icons/fa6";


const SortDisplay = () => {
    const [sortby, setSortBy] = useState(sorts[1]);
    


    const handleSort = (item) => {
        setSortBy(item);
        
    }


    return (
        <div className="filter-bar">
        <div className="left">
          <p>results</p>
        </div>
        <div className="right">
          <span>sort by:
            <Dropdown
              buttonText={sortby}
              content={
                <div className='content'>
                  {sorts.map((sort, index) => (
                    <DropDownItem 
                        key={index} 
                        onClick={() => handleSort(sort)}
                    >
                        <div className='dropdownitem'>
                          <FaCheck 
                            className='check-icon'
                            style={{
                              visibility: sortby === sort ? "visible" : "hidden",
                            }}
                          /> {sort}
                        </div>
                    </DropDownItem>
                  ))}
                </div>
              }
            />
          </span>
        </div>
      </div>
    )
}

const GigsCardDisplay = () => {
  return (
    <div className='gigscarddisplay'>
        <SortDisplay />
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
    </div>
  )
}

export default GigsCardDisplay