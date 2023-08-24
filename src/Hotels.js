import React from "react";
import lemaridian from "../src/images/lemaridian.webp";
import gokulam from "../src/images/gokulam.webp";
import marriot from "../src/images/marriot.webp";
import arcadia from "../src/images/arcadia.webp";
import taj from "../src/images/taj.webp";
import elanza from "../src/images/elanza.webp";
import residency from "../src/images/residency.webp";
import radission from "../src/images/radission.webp";
import lemontree from "../src/images/lemontree.webp";
import skylite from "../src/images/skylite.webp";
import {Helmet} from 'react-helmet-async';

const Hotels = () => {
  return (
    <>
    <Helmet>
      <title>Hotels</title>
      <meta name='description' content="List of Nearby Hotels from Coimbatore International Airport"/>
      <link rel="canonical" href="/hotels"/>
    </Helmet>
      <table className="table table-striped table-hover table-bordered table-sm">
        <thead>
          <tr className="fs-5 fw-bold">
            <th scope="col ">Hotels Near Coimbatore Airport</th>
            <th scope="col">Airport Distance</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">


          <tr>
            <td>
              <p className="fs-5 fw-bold">SkyLite Hotel</p>
              <img
                className="img-thumbnail img-responsive"
                src={skylite}
                width="300"
                height="150"
                alt="skylite hotel"
              />
            </td>
            <td>650 Metres</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Fairfield By Marriott</p>
              <img
                className="img-thumbnail img-responsive"
                src={marriot}
                width="300"
                height="150"
                alt="Fairfield By Marriott"
              />
            </td>
            <td>650 Metres</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Jenneys Residency</p>
              <img
                className="img-thumbnail img-responsive"
                src={residency}
                width="300"
                height="150"
                alt="The Residency"
              />
            </td>
            <td>2.4 Km</td>
          </tr>


          <tr>
            <td>
              <p className="fs-5 fw-bold">The Arcadia</p>
              <img
                className="img-thumbnail img-responsive"
                src={arcadia}
                width="300"
                height="150"
                alt="The Arcadia"
              />
            </td>
            <td>2.5 Km</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Gokulam Park</p>
              <img
                className="img-thumbnail img-responsive"
                src={gokulam}
                width="300"
                height="150"
                alt="Gokulam Park"
              />
            </td>
            <td>5.2 Km</td>
          </tr>


          <tr>
            <td>
              <p className="fs-5 fw-bold">Le-Meridien</p>
              <img
                className="img-thumbnail img-responsive"
                src={lemaridian}
                width="300"
                height="150"
                alt="Le-Meridien"
              />
            </td>
            <td>5.7 Km</td>
          </tr>

          
         

         
          <tr>
            <td>
              <p className="fs-5 fw-bold">Le-Meridien</p>
              <img
                className="img-thumbnail img-responsive"
                src={elanza}
                width="300"
                height="150"
                alt="Le-Meridien"
              />
            </td>
            <td>5.7 Km</td>
          </tr>

         

          <tr>
            <td>
              <p className="fs-5 fw-bold">Radisson blu</p>
              <img
                className="img-thumbnail img-responsive"
                src={radission}
                width="300"
                height="150"
                alt="Radisson blu"
              />
            </td>
            <td>6.6 Km</td>
          </tr>


          <tr>
            <td>
              <p className="fs-5 fw-bold">Lemon Tree Hotel</p>
              <img
                className="img-thumbnail img-responsive"
                src={lemontree}
                width="300"
                height="150"
                alt="Radisson blu"
              />
            </td>
            <td>6.6 Km</td>
          </tr>

          <tr>
            <td>
              <p className="fs-5 fw-bold">Vivanta by Taj</p>
              <img
                className="img-thumbnail img-responsive"
                src={taj}
                width="300"
                height="150"
                alt="Vivanta by Taj"
              />
            </td>
            <td>9.4 Km</td>
          </tr>

          
          
        </tbody>
      </table>
    </>
  );
};

export default Hotels;
