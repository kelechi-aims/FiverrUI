import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import getCurrentUser from "../../utils/getCurrentUser.js";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from "../../utils/newRequest.js";

const MyGigs = () => {
    const currentUser = getCurrentUser();
    const queuryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['myGigs'],
        queryFn: () =>
          newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) =>
            res.data,
          ),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
          return newRequest.delete(`/gigs/${id}`)
        },
        onSuccess: () => {
          queuryClient.invalidateQueries(['myGigs'])
        }
    })

    const handleDelete = (id) => {
        mutation.mutate(id)
    }

    return (
        <div className="mygigs">
            {isLoading ? ("loading") : error ? ("Something went wrong") :
            (<div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    {currentUser.isSeller && (<Link to="/add"><button>Add New Gig</button></Link>)}
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    {data.map((gig) => (
                        <tr key={gig._id}>
                        <td>
                            <img src={gig.cover} alt="gig-image"/>
                        </td>
                        <td>{gig.title}</td>
                        <td>{gig.packages[0].price}</td>
                        <td>{gig.sales}</td>
                        <td><RiDeleteBin6Line className="delete" onClick={() => handleDelete(gig._id)}/></td>
                    </tr>
                    ))}
                    
                </table>
            </div>)}        
        
        </div>
    )
};

export default MyGigs;