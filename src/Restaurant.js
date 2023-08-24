import React from 'react'
import {Helmet} from 'react-helmet-async';

const Restaurant = () => {
  return (
    <>
    <Helmet>
      <title>Restaurants</title>
      <meta name='description' content="List of Restaurants at Coimbatore International Airport"/>
      <link rel="canonical" href="/restaurant"/>
    </Helmet>
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">Annapoorna Restaurant</h5>
          <p class="card-text">
          Security Hold Area
          </p>
          <p class="card-text">
          "Indulge in the Flavors of the South: Where Tradition Meets Culinary Excellence!"
          </p>
        </div>
      </div>


    <div class="card">
        <div class="card-body">
          <h5 class="card-title">Bar Fly</h5>
          <p class="card-text">
          In Check-in Area
          </p>
          <p class="card-text">
          "Savor the Perfect Pairing: Bite into Irresistible Snacks, Sip on Exquisite Spirits!"
          </p>
        </div>
      </div>

    <br/>
      <p className='fs-6 mx-3'>For More Information Contact <strong>Terminal Manager on <a href="tel:+4222591905">0422-2591905</a> / <a href="tel:+9442191902">9442191902</a></strong></p>
    </>
  )
}

export default Restaurant