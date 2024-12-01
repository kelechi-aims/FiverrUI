import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { RiHome4Line } from "react-icons/ri";
//import 'bootstrap/dist/css/bootstrap.min.css'
import './GigBreadcrumb.scss'

const GigBreadcrumb = () => {
  return (
    <div className="custom-breadcrumb">
        <Breadcrumb >
            <Breadcrumb.Item href='/'>
                <RiHome4Line className="home-img"/>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/gigs">
                Programming & Tech
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/gigs?cat=website">
                Website Development
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Webflow
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}

export default GigBreadcrumb