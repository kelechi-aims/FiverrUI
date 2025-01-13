import React, { useState, useRef, useEffect } from 'react';
import GigCard from '../../gigCard/GigCard';
// import Dropdown from '../../dropdowns/gigsdropdown/Dropdown';
// import DropDownItem from '../../dropdowns/gigsdropdown/dropdownitem/DropDownItem';
import { sorts } from "../../../gigsdropdowndata";
import "./GigsCardsDisplay.scss";
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';



const SortDisplay = () => {
  const [sortby, setSortBy] = useState(sorts[1]);
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  
  const contentRef = useRef();
  const dropdownRef = useRef();
  const buttonRef = useRef();
  
  const toggleDropdown = () => {
    if(!open) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.clientHeight;

      // Calculate space above and below
      const spaceAbove = buttonRect.top;
      const spaceBelow = window.innerHeight - buttonRect.bottom;

      // Decide the top position
      const topPosition =
        spaceBelow >= contentHeight || spaceBelow > spaceAbove
          ? "100%" // Below button
          : `-${contentHeight}px`; // Above button

      setDropdownTop(topPosition);
    }
    setOpen((prev) => !prev);
  };


  const handleSort = (item) => {
      setSortBy(item);
      setOpen(false);    
  }
    
    // Detect for clicks outside of dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
        
        return () => {
          document.removeEventListener('click', handleClickOutside);
        }
      }, [])



    return (
        <div className="sorting-bar">
        <div className="left">
          <p>results</p>
        </div>
        <div className="right">
          <span>sort by: </span> 
            <div className="sort-dropdown" ref={dropdownRef}>
            <button 
              className="dropdown-bttn"
              onClick={toggleDropdown}
              ref={buttonRef}
            >
              {sortby}      
              <span className='toggle-icon'>
                {open ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
          
            <div 
              className={`dropdown-content ${open ? "content-open" : null}`}
              ref={contentRef}
              style={{top: dropdownTop}}
            >
              {sorts.map((sort, index) => (
                <div 
                  className='dropdownitem'
                  key={index}
                  onClick={() => handleSort(sort)}
                >
                  <FaCheck 
                    className='check-icon'
                      style={{
                      visibility: sortby === sort ? "visible" : "hidden",
                      }}
                  /> {sort}
                </div>
              ))}
            </div>
            </div>
         
        </div>
      </div>
    )
}

const GigsCardDisplay = ({ gigs }) => {
  return (
    <div className='gigscarddisplay'>
        <SortDisplay />
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
    </div>
  )
}

export default GigsCardDisplay