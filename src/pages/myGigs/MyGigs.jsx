import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyGigs = () => {
    return (
        <div className="mygigs">
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add"><button>Add New Gig</button></Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><RiDeleteBin6Line className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><RiDeleteBin6Line className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><RiDeleteBin6Line className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><RiDeleteBin6Line className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><RiDeleteBin6Line className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><RiDeleteBin6Line className="delete"/></td>
                    </tr>
                </table>
            </div>        
        
        </div>
    )
};

export default MyGigs;