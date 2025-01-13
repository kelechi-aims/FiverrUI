import React from "react";
import "./Gig.scss";
import { Link, useParams } from "react-router-dom";
import ReviewTable from "../../components/gigComponents/ReviewTable/ReviewTable";
import GigBreadcrumb from "../../components/gigComponents/breadcrumb/GigBreadcrumb";
import User from "../../components/gigComponents/user/User";
import GigCorousel from "../../components/gigComponents/gigcorousel/GigCorousel";
import Sidebar from "../../components/gigComponents/sidebar/Sidebar";
import ReviewSlide from "../../components/gigComponents/reviewslides/ReviewSlide";
import AboutGig from "../../components/gigComponents/aboutgig/AboutGig";
import AboutUser from "../../components/gigComponents/aboutuser/AboutUser";
import GigPortfolio from "../../components/gigComponents/gigportfolio/GigPortfolio";
import Packages from "../../components/gigComponents/gigpackages/Packages";
import Recommended from "../../components/gigComponents/recommended/Recommended";
import Fqas from "../../components/gigComponents/fqas/Fqas";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Gig = () => {
  const { id } = useParams();  

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) =>
        res.data,
      ),
  });
  console.log(data);

  const { 
    isLoading : isLoadingUser, 
    error : errorUSer, 
    data : dataUser,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) =>
        res.data,
      ),
  })
  

  
  return (
    <div className="gig">
      {isLoading ? (
         "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (<div className="container">

        <div className="left">
            <GigBreadcrumb />
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "Loading"
            ) : errorUSer ? (
              "Something went wrong"
            ) : <User dataUser={dataUser} data={data}/>}
            <hr />
            <div className="loyalty-banner">
                <img src="/images/3-Trophy-70_alpha.gif" alt="badge" className="badge" />
                <span><b>People keep coming back!</b> pandascout has an exceptional number of repeat buyers.</span>
            </div>
            
            <GigCorousel items={data}/>


            <div className="fourth">
                <h2>What people loved about this freelancer</h2>
                <Link className="all-review">See all reviews</Link>
            </div>
            <ReviewSlide gigId={id}/>
            <AboutGig data={data}/> 
            {isLoadingUser ? (
              "Loading"
            ) : errorUSer ? (
              "Something went wrong"
            ) :
            <AboutUser dataUser={dataUser} data={data}/>}                
            <GigPortfolio />
            <Packages data={data}/>
            <Recommended />
            <Fqas />
            <ReviewTable />
          </div>

        <div className="right">
            <div className="right-side">
                <Sidebar data={data} gigId={id}/>
            </div>
        </div>
      </div>)}
    </div>
  )
}

export default Gig;