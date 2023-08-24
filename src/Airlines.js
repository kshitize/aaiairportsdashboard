import React from "react";
import indigo from './images/indigo.webp'
import airindia from './images/airindia.webp'
import vistara from './images/vistara.webp'
import scoot from './images/scoot.webp'
import airarabia from './images/airarabia.webp'
import {Helmet} from 'react-helmet-async';

const Airlines = () => {
  return (
    <>
    <Helmet>
      <title>Airlines</title>
      <meta name='description' content="List of all Airlines operating at Coimbatore International Airport."/>
      <link rel="canonical" href="/airlines"/>
    </Helmet>
      <table className="table table-striped table-hover table-bordered table-sm">
        <thead>
          <tr className="fs-5 fw-bold">
            <th scope="col ">Airlines</th>
            <th scope="col">Sector</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>
              <p className="fs-5 fw-bold">Indigo</p>
              <img
                className="img-thumbnail img-responsive"
                src={indigo}
                width="300"
                height="150"
                alt="Gokulam Park"
              />
            </td>
            <td>Chennai<br/> Pune<br/> Bengaluru<br/> Hyderabad<br/>New Delhi<br/> Mumbai</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Air India</p>
              <img
                className="img-thumbnail img-responsive"
                src={airindia}
                width="300"
                height="150"
                alt="Le-Meridien"
              />
            </td>
            <td>Mumbai<br/> Chennai</td>
          </tr>


          <tr>
            <td>
              <p className="fs-5 fw-bold">Vistara</p>
              <img
                className="img-thumbnail img-responsive"
                src={vistara}
                width="300"
                height="150"
                alt="The Arcadia"
              />
            </td>
            <td>Mumbai<br/> New Delhi</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Scoot</p>
              <img
                className="img-thumbnail img-responsive"
                src={scoot}
                width="300"
                height="150"
                alt="Vivanta by Taj"
              />
            </td>
            <td>Singapore</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Air Arabia</p>
              <img
                className="img-thumbnail img-responsive"
                src={airarabia}
                width="300"
                height="150"
                alt="Le-Meridien"
              />
            </td>
            <td>Sharjah(UAE)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Airlines;
