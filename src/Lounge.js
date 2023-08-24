import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {Helmet} from 'react-helmet-async';

const Lounge = () => {
  return (
    <>
    <Helmet>
      <title>Lounges</title>
      <meta name='description' content="Lounge Facility at Coimbatore International Airport."/>
      <link rel="canonical" href="/lounge"/>
    </Helmet>
      <p className='d-flex justify-content-center fs-4 fw-bold mx-2'>Lounge Faciliy is Available at Coimbatore International Airport</p>
      <p className='d-flex justify-content-center fs-4 fw-bold'>Contact Terminal Manager for More Information</p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Airport Terminal Manager</h5>
          <p className="card-text">
          <BsTelephone/><a href="tel:+4222591905">0422-2591905</a> / <a href="tel:+9442191902">9442191902</a>
          </p>
          <p className="card-text">
          <FiMail/>tm-cbe@aai.aero
          </p>
        </div>
      </div>
    </>
  )
}

export default Lounge