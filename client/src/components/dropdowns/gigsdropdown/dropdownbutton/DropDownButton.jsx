import React, { forwardRef } from 'react';
import "./DropDownButton.scss";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const DropDownButton = forwardRef((props, ref) => {
  const {children, open, toggle} = props;  
  return (
    <button onClick={toggle} className={`dropdown-btn ${open ? "button-open" : null}`} ref={ref}>
        {children}
        <span className='toggle-icon'>
            {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
    </button>
  )
})

export default DropDownButton