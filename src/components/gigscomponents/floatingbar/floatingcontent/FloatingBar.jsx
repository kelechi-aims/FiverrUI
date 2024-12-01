import React from 'react';
import './FloatingBar.scss';
import Dropdown from '../../../dropdowns/gigsdropdown/Dropdown';
import DropDownItem from '../../../dropdowns/gigsdropdown/dropdownitem/DropDownItem';
import { serviceData, sellerData } from '../../../../gigsdropdowndata';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const FloatingBarDropDownContent = ({ items }) => {
    const maxDisplayCount = 4;
   
    return (
        <>
        <div className="content">
            {Object.keys(items).map((service) => (
              <DropDownItem key={service}>            
                <h3 className="service-title">{service}</h3>
                <div className="service-options">
                    {items[service].slice(0, maxDisplayCount).map((option) => (
                        <label htmlFor=""                             className="option"
                            key={option.name}
                        >
                        <input type="checkbox"
                                
                            className="option-checkbox"
                            // checked={selectedOptions.includes(option.name)}
                            // onChange={() => handleOptionChange(option.name)}
                        />
                        <div className="option-details"><span className="option-name">{option.name}</span> <span className="option-count">({option.count})</span></div>
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

                  </DropDownItem>
                ))}
        </div> 
        </>
                
                

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
            <Dropdown
              
              buttonText="Service options"
              content={
                <>
                <FloatingBarDropDownContent items={serviceData}/>                
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

            >
            </Dropdown>
        
            <Dropdown 
              buttonText="Seller details"
              content={
                <>
                <FloatingBarDropDownContent items={sellerData}/>                
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
                        <label htmlFor="">
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

              
            />
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