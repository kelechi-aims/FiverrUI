import React from "react";
import "./Order.scss";
import { SiImessage } from "react-icons/si";

const Orders = () => {
    const currentUser = {
        id: 1,
        username: "John Doe",
        registered: true,
        isSeller: true
    }

    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><SiImessage className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><SiImessage className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><SiImessage className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><SiImessage className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><SiImessage className="delete"/></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/architecture.png" alt="gig-image"/>
                        </td>
                        <td>Gig1</td>
                        <td>83</td>
                        <td>234</td>
                        <td><SiImessage className="delete"/></td>
                    </tr>
                </table>
            </div>        
        
        </div>
    )
};

export default Orders;