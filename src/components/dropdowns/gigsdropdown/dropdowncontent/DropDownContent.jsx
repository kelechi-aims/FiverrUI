import React, { forwardRef } from 'react';
import "./DropDownContent.scss";

const DropDownContent = forwardRef((props, ref) => {
  const {children, open, top, closecontent} = props;
  return (
    <div 
      className={`dropdown-content ${open ? "content-open" : null}`} 
      ref={ref}
      style={{top: top ? `${top}px` : "100%"}}
      onClick={closecontent}
    >
        {children}
    </div>
  )
})

export default DropDownContent