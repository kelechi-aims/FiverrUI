import React from 'react'
import { useState, useRef, useEffect } from 'react'
import DropDownButton from './dropdownbutton/DropDownButton'
import DropDownContent from './dropdowncontent/DropDownContent'
import './Dropdown.scss';

const Dropdown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const dropdownRef = useRef(); 
  const buttonRef = useRef();
  const contentRef = useRef();
  
  // Control the dropdown opening
  const toggleDropdown = () => {
    if(!open) {
        const spaceRemaining = window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
        const contentHeight = contentRef.current.clientHeight;

        const topPosition = spaceRemaining > contentHeight ? null : spaceRemaining - contentHeight;
        setDropdownTop(topPosition)
    }

    setOpen((open) => !open);
  }

  const closeDropdown = () => {
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
    <div className='dropdown' ref={dropdownRef}>
        <DropDownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
            {buttonText}
        </DropDownButton>
        <DropDownContent top={dropdownTop} ref={contentRef} open={open} closecontent={closeDropdown} >
            {content}
        </DropDownContent>
    </div>
  )
}

export default Dropdown;