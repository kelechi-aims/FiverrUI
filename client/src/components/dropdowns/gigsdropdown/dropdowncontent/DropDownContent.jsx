import React, { forwardRef } from 'react';
import "./DropDownContent.scss";

const DropDownContent = forwardRef((props, ref) => {
  const {children, open, top, closecontent} = props;

  // Handle close dropdown
  

  return (
    <div 
      className={`dropdown-content ${open ? "content-open" : null}`} 
      ref={ref}
      style={{top: top ? `${top}px` : "100%"}}
    >
        {children}
    </div>
  )
})

export default DropDownContent