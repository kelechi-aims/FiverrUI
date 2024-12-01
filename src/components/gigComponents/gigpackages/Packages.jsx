import React from 'react';
import './Packages.scss';
import { FaCheck } from 'react-icons/fa';


const Packages = () => {
  return (
    <div className="packages">
        <h2>Compare packages</h2>
        <table>
            <colgroup>
                <col />
                <col />
                <col />
                <col />
            </colgroup>
            <tr>
                <th className="package-roll"><p>Package</p></th>
                <th className="price-type-title-roll">
                    <p className="price">$150</p>
                    <b className="type">Basic</b><br/>
                    <b className="title">Landing Page & Basic Interaction</b>
                </th>
                <th className="price-type-title-roll">
                    <p className="price">$480</p>
                    <b className="type">Standard</b><br/>

                    <b className="title">Functional CMS, Design, Interaction</b>
                </th>
                <th className="price-type-title-roll">
                    <p className="price">$850</p>
                    <b className="type">Premium</b><br/>
                    <b className="title">Full Functional Website & Animation</b>
                </th>
            </tr>
            <tr>
                <td className="package-roll"></td>
                <td className='desc'>One Page with upto 5 sections - Webflow Development, CMS, Responsive, Animation & SEO</td>
                <td className='desc'>Up to 5 pages - Webflow Development, CMS, Responsive, Animation & SEO With Your Requirement</td>
                <td className='desc'>Up to 8 pages - Webflow Development, CMS, Responsive, Animation & SEO With Your Requirement</td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Functional website</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr>
                <td className="package-roll"><span>Responsive design</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Content upload</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr>
                <td className="package-roll"><span>E-commerce functionality</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Payment processing</span></td>
                <td><FaCheck /></td>
               <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr>
                <td className="package-roll"><span>Opt-in form</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Autoresponder integration</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr>
                <td className="package-roll"><span>Hosting setup</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Social media icons</span></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
                <td><FaCheck /></td>
            </tr>
            <tr>
                <td className="package-roll"><span>Number of pages</span></td>
                <td>1</td>
                <td>5</td>
                <td>8</td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Plugins/extensions installation</span></td>
                <td>5</td>
                <td>7</td>
                <td>10</td>
            </tr>
            <tr>
                <td className="package-roll"><span>Number of products</span></td>
                <td>1</td>
                <td>10</td>
                <td>20</td>
            </tr>
            <tr className='add-bg'>
                <td className="package-roll"><span>Revisions</span></td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
            </tr>
            <tr>
                <td className="package-roll"><span>Delivery Time</span></td>
                <td className='delivery-roll'>
                    <div className="delivery">
                        <label htmlFor="">
                            <input type="radio" checked/>
                                <span> 4 days</span>
                        </label>
                        <label htmlFor="">
                            <input type="radio" />
                            <span> 3 days</span>
                            <p>(+$50)</p>
                        </label>
                    </div>
                </td>
                <td className='delivery-roll'>
                    <div className="delivery">
                        <label htmlFor="">
                            <input type="radio" checked/>
                                <span> 6 days</span>
                        </label>
                        <label htmlFor="">
                            <input type="radio" />
                                <span> 4 days</span>
                                <p>(+$50)</p>
                        </label>
                    </div>
                </td>
                <td className='delivery-roll'>
                    <div className="delivery">
                        <label htmlFor="">
                            <input type="radio" checked/>
                                <span> 7 days</span>
                        </label>
                        <label htmlFor="">
                            <input type="radio" />
                                <span> 5 days</span>
                                <p>(+$50)</p>
                        </label>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="package-roll"><span>Total</span></td>
                <td className='total-roll'>
                    <div className="price-total">
                        <p>$200</p>
                    </div>
                    <button className="select">
                        <p>Select</p>
                    </button>
                </td>
                <td className='total-roll'>
                    <div className="price-total">
                        <p>$480</p>
                    </div>
                    <button className="select">
                        <p>Select</p>
                    </button>
                </td>
                <td className='total-roll'>
                    <div className="price-total">
                        <p>$850</p>
                    </div>
                    <button className="select">
                        <p>Select</p>
                    </button>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Packages;