import React from "react";
import "./Order.scss";
import { SiImessage } from "react-icons/si";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";

const Orders = () => {
    const currentUser = getCurrentUser();
    const navigate = useNavigate()

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
          newRequest.get('/orders').then((res) =>
            res.data,
          ),
    });
    
    const handleContact = async (order) => {
        const sellerId = order.sellerId;
        const buyerId = order.buyerId;
        const id = sellerId + buyerId;

        try {
            const res = await newRequest.get(`/conversations/single/${id}`);
            navigate(`/message/${res.data.id}`);
        } catch (error) {
            if (error.response.status === 404) {
                const res = await newRequest.post(`/conversations`, { to: currentUser.seller ? buyerId : sellerId });
                navigate(`/message/${res.data.id}`);
            }
        }
    }

    return (
        <div className="orders">
            {isLoading ? (
                "Loading"
            ) : error ? (
                "Something went wrong"
            ) : (<div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                   <thead>
                   <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                   </thead>
                    
                    <tbody>
                    {data.map((order) => (
                    <tr key={order._id}> 
                        <td>
                            <img src={order.img} alt="gig-image"/>
                        </td>
                        <td>{order.title}</td>
                        <td>{order.price}</td>
                        <td>{order.sellerId}</td>
                        <td><SiImessage className="delete" onClick={() => handleContact(order)}/></td>
                    </tr>
                    ))}
                    </tbody>
                    
                </table>
            </div>)}        
        
        </div>
    )
};

export default Orders;