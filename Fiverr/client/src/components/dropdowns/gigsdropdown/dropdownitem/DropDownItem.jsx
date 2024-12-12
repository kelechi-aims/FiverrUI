import React from 'react';
import "./DropDownItem.scss";

const DropDownItem = ({ children, onClick, closecontent }) => {
  const handleClick = () => {
    if (onClick) onClick();
    closecontent;
  }
  return (
    <div className='dropdown-item' onClick={handleClick}>
        {children}
    </div>
  )
}

export default DropDownItem