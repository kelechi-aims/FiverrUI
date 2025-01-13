import React from 'react';
import './Packages.scss';
import { FaCheck } from 'react-icons/fa';



const Packages = ({ data }) => {
  return (
    <div className="packages">
        <h2>Compare packages</h2>
        <table>
            <colgroup>
                <col />
                {data.packages.map((item, index) => (
                    <col key={index}/>
                ))}
            </colgroup>
            
            {/* Table Header */}
            <thead>
            <tr>
                <th className="package-roll"><p>Package</p></th>
                {data.packages.map((pkg, index) => (
                    <th key={index} className="price-type-title-roll">
                    <p className="price">${pkg.price}</p>
                    <b className="type">{pkg.name}</b><br/>
                    <b className="title">{pkg.title}</b>
                </th>
                ))}                
            </tr>
            </thead>

            {/* Table Body */}
            <tbody>
            <tr>
                <td className="package-roll"></td>
                {data.packages.map((pkg, index) => (
                    <td key={index} className='desc'>{pkg.description}</td>
                ))}               
            </tr>

            {/* Dynamic Features */}
            {[
                {label: "Functional website", key: "functionalWebsite"},
                {label: "Responsive design", key: "responsiveDesign"},
                {label: "Content upload", key: "contentUpload"},
                {label: "E-commerce functionality", key: "ecommerceFunctionality"},
                {label: "Payment processing", key: "paymentProcessing"},
                {label: "Opt-in form", key: "optInForm"},
                {label: "Autoresponder integration", key: "autoresponderIntegration"},
                {label: "Hosting setup", key: "hostingSetup"},
                // {lable: "Speed optimization", key: "speedOptimizaton"},
                {label: "Social media icons", key: "socialMediaIcons"},
                // { label: "Plugins/extensions installation", key: "pliginsExtensionsInstallation" },
            ].map((feature, index) => (
                <tr key={index} className={index % 2 !== 1 ? "add-bg" : ""}>
                    <td className="package-roll"><span>{feature.label}</span></td>
                    {data.packages.map((pkg, pkgIndex) => (
                        <td key={pkgIndex}>
                            {pkg.features[feature.key] ? (
                                <FaCheck />
                            ) : (
                                pkg.features[feature.key] || <FaCheck style={{color: "lightgray"}}/>
                            )}
                        </td>
                    ))}
                </tr>
            ))}

            {/* Number of pages */}
            <tr>
                <td className="package-roll"><span>Number of products</span></td>
                {data.packages.map((pkg, index) => (
                    <td key={index}>
                        {pkg.features.numberOfPAges ? pkg.features.numberOfPAges : "N/A"}</td>
                ))}
            </tr>

            {/* Number of products */}
            <tr>
                <td className="package-roll"><span>Number of pages</span></td>
                {data.packages.map((pkg, index) => (
                    <td key={index}>
                        {pkg.features.numberOfProducts? pkg.features.numberOfProducts : "N/A"}</td>
                ))}
            </tr>

            {/* Revision */}
            <tr>
                <td className="package-roll"><span>Revision</span></td>
                {data.packages.map((pkg, index) => (
                    <td key={index}>
                        {pkg.unlimitedRevision ? "unlimited" : "N/A"}</td>
                ))}
            </tr>

            {/* Delivery Time */}
            <tr className='add-bg'>
            <td className="package-roll"><span>Delivery Time</span></td>
                {data.packages.map((pkg, index) => (
                    <td key={index} className='delivery-roll'>
                    <div className="delivery">
                        <label htmlFor="">
                            <input type="radio" defaultChecked/>
                                <span>{pkg.deliveryTime} days</span>
                        </label>
                        <label htmlFor="">
                            <input type="radio" />
                            <span> {pkg.deliveryTime - 1} days</span>
                            <p>(+$50)</p>
                        </label>
                    </div>
                </td>
                ))}
            </tr>

            {/* Totol */}
            <tr>
                <td className="package-roll"><span>Total</span></td>
                {data.packages.map((pkg, index) => (
                    <td key={index} className='total-roll'>
                    <div className="price-total">
                        <p>${pkg.price}</p>
                    </div>
                    <button className="select">
                        <p>Select</p>
                    </button>
                </td>
                ))}
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Packages;