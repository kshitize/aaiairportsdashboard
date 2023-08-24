import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {Helmet} from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
      <title>Contact</title>
      <meta name='description' content="Contact information at Coimbatore International Airport."/>
      <link rel="canonical" href="/contact"/>
    </Helmet>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Shri. S. Senthil Valavan, Airport Director</h5>
          <p className="card-text">
          <BsTelephone/><a href="tel:+4222592155">0422-2592155</a>
          </p>
          <p className="card-text">
          <FiMail/>apdcoimbatore@aai.aero
          </p>
        </div>
      </div>

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


      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Public Grievance Officer</h5>
          <p className="card-text">
          <BsTelephone/><a href="tel:+4222591905">0422-2591905</a> / <a href="tel:+9442191902">9442191902</a>  
          </p>
          <p className="card-text">
          <FiMail/>pgo-cbe@aai.aero
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Lost and Found </h5>
          <p className="card-text">
          <BsTelephone/><a href="tel:+4222591905">0422-2591905</a> / <a href="tel:+9442191902">9442191902</a>  
          </p>
          <p className="card-text">
          <FiMail/>tm-cbe@aai.aero
          </p>
        </div>
      </div>


    </>
  );
};

export default Contact;
