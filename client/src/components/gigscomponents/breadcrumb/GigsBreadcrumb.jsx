import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { RiHome4Line } from "react-icons/ri";
//import 'bootstrap/dist/css/bootstrap.min.css'
import './GigsBreadcrumb.scss'

const GigsBreadcrumb = () => {
  return (
    <div className="custom-breadcrumb">
        <Breadcrumb >
            <Breadcrumb.Item href='/'>
                <RiHome4Line className="home-img"/>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/gigs" active>
                Programming & Tech
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}

export default GigsBreadcrumb