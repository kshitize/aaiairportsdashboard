import React from 'react'
import {Helmet} from 'react-helmet-async';

const Transport = () => {
  return (
    <>
    <Helmet>
      <title>Transport</title>
      <meta name='description' content="List of Transport options available from Coimbatore International Airport."/>
      <link rel="canonical" href="/transport"/>
    </Helmet>
     <p className='d-flex justify-content-center fs-4 fw-bold'>Transport Options from Coimbatore International Airport</p>
     <table className="table table-striped table-hover table-bordered table-sm">
     <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Information</th>
      
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">Bus</th>
      
      <td>SITRA Bus Stand is located 600 Meter from Coimbatore Airport.</td>
      
    </tr>
    <tr>
      <th scope="row">Taxi</th>
      
      <td>Taxi Counters are available in the Airport. For more information you can <br/>contact Duty Airport Terminal Manager on <a href="tel:+4222591905">0422-2591905</a> / <a href="tel:+9442191902">9442191902</a></td>
      
      
      
    </tr>
    <tr>
      <th scope="row">Train</th>
      
      <td >Coimbatore Railway station is located at approximately 11.6 Km from Coimbatore Airport, you can take Bus / Taxi / Auto service to reach to the railway station </td>
      
      
    </tr>
    <tr>
      <th scope="row">Auto</th>
      
      <td >Auto Service is also available out side the Terminal Building.</td>
      
      
    </tr>
  </tbody>
</table>


<p className='d-flex justify-content-center fs-5 mx-2'><strong>Note: </strong> Cab Aggregator Service like OLA / UBER / Red Taxi is also available from Coimbatore International Airport</p>

    </>
  )
}

export default Transport