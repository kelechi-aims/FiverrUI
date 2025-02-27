import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import moment from "moment";


const Messages = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const queuryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['conversations'],
        queryFn: () =>
        newRequest.get(`/conversations`).then((res) =>
            res.data,
        ),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
          return newRequest.put(`/conversations/${id}`)
        },
        onSuccess: () => {
          queuryClient.invalidateQueries(['conversations'])
        }
    })

    const handleRead = (id) => {
        mutation.mutate(id)
    }


    return (
        <div className="messages">
            {isLoading ? (
                "Loading"
            ) : error ? (
                "Something went wrong"
            ) : (<div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>{currentUser.isSeller ? "Seller" : "Buyer"}</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    {data.map((c) => (
                    <tr 
                        className={
                            ((currentUser.isSeller && !c.readBySeller) ||
                            (!currentUser.isSeller && !c.readByBuyer)) &&
                            "active"} 
                        key={c.id}>
                        <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                        <td><Link to={`/message/${c.id}`} className="link">{c?.lastMessage?.substring(0, 100)}...</Link></td>
                        <td>{moment(c.updatedAt).fromNow()}</td>
                        {((currentUser.isSeller && !c.readBySeller) ||
                            (!currentUser.isSeller && !c.readByBuyer) &&
                            (<td><button onClick={() => handleRead(c.id)}>Mark as Read</button></td>)
                        )}
                        
                    </tr>
                    ))}
                </table>
            </div>)}        
        
        </div>
    )
};

export default Messages;