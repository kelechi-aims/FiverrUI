import React from "react";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Message = () => {
    const { id } = useParams();
    const queuryClient = useQueryClient();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { isLoading, error, data } = useQuery({
        queryKey: ['messages'],
        queryFn: () =>
        newRequest.get(`/messages/${id}`).then((res) =>
            res.data,
        ),
    });

    const mutation = useMutation({
        mutationFn: (message) => {
          return newRequest.post(`/messages`, message)
        },
        onSuccess: () => {
          queuryClient.invalidateQueries(['messages'])
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            conversationId: id,
            description: e.target[0].value,
        });
        e.target[0].value = "";
    }

    return (
        <div className="message">
            <div className="container">
                <span className="breadcrumbs">
                    <Link className="link" to="/messages">Messages</Link> &gt; John Deo &gt;
                </span>
                {isLoading ? (
                    "Loading"
                ) : error ? (
                    "Something went wrong"
                ) : (<div className="messages">
                    {data.map((m) => (
                        <div className={m.userId === currentUser._id ? "item owner " : "item"} key={m._id}>
                        <img src="/images/kacey.jpeg" alt="" />
                        <p>{m.description}</p>
                    </div>
                    ))}

                </div>)}
                <hr />
                <form className="write" onSubmit={handleSubmit}>
                    <textarea name="" id="" placeholder="write a message" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
};

export default Message;

