import React from 'react';
import './FloatingBar.scss';
// import Dropdown from '../../../dropdowns/gigsdropdown/Dropdown';
// import DropDownItem from '../../../dropdowns/gigsdropdown/dropdownitem/DropDownItem';
import { serviceData, sellerData } from '../../../../gigsdropdowndata';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';


export const FloatingBarDropDownContent = ({ items }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxDisplayCount = 4;
  // const [showmore, setShowMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const dropdownRef = useRef(); 
  const buttonRef = useRef();
  const contentRef = useRef();
  
  // Control the dropdown opening
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

    setOpen((open) => !open);
  }

    // Handles checkbox change
    const handleOptionChange = (optionName) => {
        if (selectedOptions.includes(optionName)) {
          // Remove option if already selected
          setSelectedOptions(selectedOptions.filter((option) => option !== optionName));
        } else {
          // Add option if not selected
          setSelectedOptions([...selectedOptions, optionName]);
        }
    };
    const handleClear = () => {
      setSelectedOptions([]);
  }

  const handleApply = () => {
    // Apply selected options
    console.log("Selected Options:", selectedOptions);
    setOpen(!open)
  }
  

    // Handles show more/less functionality
    // const handleShowMore = (service) => {
    //     setShowMore(!showmore);
    // }
    
  
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
        <div className="dropdown" ref={dropdownRef}>
          <button 
            className={`dropdown-bttn ${open ? "button-open": null}`}
            ref={buttonRef}
            onClick={toggleDropdown}
          >
            Service options 
            <span className='toggle-icon'>
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <div 
            className={`dropdown-content ${open ? "content-open" : null}`}
            ref={contentRef}
            style={{top: dropdownTop}}
          >
          <div className="content">
          {Object.keys(items).map((service) => (
              <div className="service" key={service}>            
                <h3 className="service-title">{service}</h3>
                <div className="service-options">
                  {items[service].slice(0, maxDisplayCount).map((option) => (
                    <label htmlFor=""                             
                      className="option"
                      key={option.name}
                    >
                      <input type="checkbox"
                        className="option-checkbox"
                        checked={selectedOptions.includes(option.name)}
                        onChange={() => handleOptionChange(option.name)}
                      />
                      <div className="option-details">
                        <span className="option-name">{option.name}</span> 
                        <span className="option-count">({option.count})</span>
                      </div>
                    </label>
                  ))}
                </div>
                {items[service].length > maxDisplayCount && (
                  <button className="show-more"
                    // onClick={() => handleShowMore(service)}
                  >
                    +{items[service].length - maxDisplayCount} more
                  </button>
                )}
                <hr />               

              </div>
          ))}
          </div>
          
           
          <div className="dropdown-footer">
            <button 
              className="clear-all" 
              onClick={handleClear}
            >
              Clear all
            </button>
            <button 
              className="apply" 
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
          </div>

          
        </div>    

    )
}

const FloatingBar = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [toggle, setToggle] =useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }


    const handleClear = () => {
        setSelectedOptions([]);
    }

    const handleApply = () => {
        onApply(selectedOptions);
    }

  return (
    <div>
        <div className="floating-top-bar">
          <div className="left">
          <FloatingBarDropDownContent items={serviceData}/>
          <FloatingBarDropDownContent items={sellerData}/>                

        
          
            {/* <Dropdown 
              buttonText="Budget"
              content={
                <>  
                    <div className="content">
                        <div className="hire">
                        <p className="hourly">Hire hourly</p>
                        <p className="pay">Pay on an hourly basis, only on Fiverr</p>
                        <p className="pay">Pro. <Link className='hourly-link'>Try hourly rates</Link></p>
                        </div>
                        <hr />OR
                        <label className='la' htmlFor="">
                            <input type="radio" className='radio'/>
                            <div className="type">
                                <span className="subtype">Value</span>
                                <span className="amount">Under $210</span>
                            </div>
                         </label>
                    <label htmlFor="">
                        <input type="radio" className='radio'/>
                        <div className="type">
                            <span className="subtype">Mid-range</span>
                            <span className="amount">$210-$400</span>
                        </div>
                    </label>
                    <label htmlFor="">
                        <input type="radio" className='radio'/>
                        <div className="type">
                            <span className="subtype">High-end</span>
                            <span className="amount">$400 & Above</span>
                        </div>
                    </label>
                    <label htmlFor="">
                        <input type="radio" className='radio'/>
                        <div className="type">
                            <span className="subtype">Custom</span>
                        </div>
                    </label>
                </div>           
                <div className="dropdown-footer">
                  <button className="clear-all" onClick={handleClear}>
                    Clear all
                  </button>
                  <button className="apply" onClick={handleApply}>
                      Apply
                  </button>
                </div>

                </>
                
              }

            />
            <Dropdown 
              buttonText="Delivery time"
              content={
                <>
                <div className="content">
                    <label htmlFor="" className='delivery'>
                        <input type="radio" />
                        <div className="type">
                            <span className="subtype">Express 24H</span>
                        </div>
                    </label>
                    <label htmlFor="" className='delivery'>
                        <input type="radio" />
                        <div className="type">
                            <span className="subtype">Up to 3 days</span>
                        </div>
                    </label>
                    <label htmlFor="" className='delivery'>
                        <input type="radio" />
                        <div className="type">
                            <span className="subtype">Up to 7 days</span>
                        </div>
                    </label>
                    <label htmlFor="" className='delivery'>
                        <input type="radio" checked/>
                        <div className="type">
                            <span className="subtype">Anytime</span>
                        </div>
                    </label>
                </div>
               
                <div className="dropdown-footer">
                  <button className="clear-all" onClick={handleClear}>
                    Clear all
                  </button>
                  <button className="apply" onClick={handleApply}>
                      Apply
                  </button>
                </div>

                </>
                
              }

              
            /> */}
          </div>
          <div className="right">
            <span>
              <button onClick={handleToggle}>
                {toggle ? <FaToggleOff className="toggleoff"/> :
                  <FaToggleOn className="toggleon"/>}
              </button>
                Pro services
            </span>
          </div>
        </div>
    </div>
  )
}

export default FloatingBar