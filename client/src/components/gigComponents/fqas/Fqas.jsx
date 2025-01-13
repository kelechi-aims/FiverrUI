import React, { useState } from 'react';
import './Fqas.scss';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const Fqas = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className="accordion">
        <article className="menu">
            <button
                className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
                onClick={() => toggleAccordion(0)}
            >
                <b>What do I need to start my website?</b>
                <span className="arrow">
                    {activeIndex === 0 ? <FaAngleDown /> : <FaAngleUp/>}
                </span>
            </button>
            <p
                className="accordion-body"
                style={{ display: activeIndex === 0 ? 'block' : 'none' }}
            >
                You need to provide me with the following details. Specifications, Your Requirements, Backgrounds, Features you want, Data and Text, Webflow login credentials.
            </p>
        </article>

        <article className="menu">
            <button 
                className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
                onClick={() => toggleAccordion(1)}
            >
                <b>Will the website be responsive across all devices?</b>
                <span className="arrow">
                    {activeIndex === 1 ? <FaAngleDown /> : <FaAngleUp/>}
                </span>
            </button>
            <p 
                className="accordion-body"
                style={{ display: activeIndex === 1 ? 'block' : 'none' }}
            >
                Yes! It will be responsive across all devices and browsers.
            </p>
        </article>

        <article className="menu lastone">
            <button 
                className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`}
                onClick={() => toggleAccordion(2)}
            >
                <b>Where will you build the website?</b>
                <span className="arrow">
                    {activeIndex === 2 ? <FaAngleDown /> : <FaAngleUp/>}
                </span>
            </button>
            <p 
                className="accordion-body"
                style={{ display: activeIndex === 2 ? 'block' : 'none' }}
            >
                I will build your Webflow website in your Webflow account.
            </p>
        </article>
    </div>
  )
}

export default Fqas;