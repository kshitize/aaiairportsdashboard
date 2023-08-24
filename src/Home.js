import React, { useState } from "react";
import cjbairport from "../src/images/coimbatore.webp";
import agartalaairport from "../src/images/agartala.webp";
import chennaiairport from "../src/images/chennai.jpeg";
import bustaxitrain from "../src/images/bustaxitrain.webp";
import foodloungerestaurant from "../src/images/food.webp";
import hotels from "../src/images/hotels.webp";
import { NavLink } from "react-router-dom";
import airlines from "../src/images/airlines.webp";
import { Helmet } from "react-helmet-async";
import data from './Airportsfilter.json'


const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedOption, setSelectedOption] = useState("");
  // const [options, setOptions] = useState(["Chennai", "Coimbatore", "Agartala"]);

  // const handleOptionsChange = (event) => {
  //   const { value } = event.target;
  //   setSelectedOption(value);
  // };

  // const handleButtonClick = () => {
  //   // Perform any necessary validation or checks here before setting the selected option
  //   setSelectedOption(options[0]); // Set the first option as selected
  // };
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="AAI Airports" />
        <link rel="canonical" href="/" />
      </Helmet>
     
      <br />
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Airport Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(event)=>setSearchTerm(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-center">AIRPORTS</h1>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {data.filter((val)=>{
                    if(searchTerm===""){
                      return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  })
                  .map((val)=>{
                    return ( <div className="col-md-4 col-10 mx-auto" key={val.id}>
                    <div className="card">
                      <img
                        src={require(`${val.image}`)}
                        className="card-img-top img-thumbnail img-responsive"
                        alt="coimbatore airport"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{val.name.toUpperCase()}</h5>
                        <p className="card-text">
                          Updated on {val.dateofupdation}
                        </p>
                        <NavLink to={`/${val.link}`} className="btn btn-primary">
                          More Info...
                        </NavLink>
                      </div>
                    </div>
                  </div>)
                       
                    
                  })
                  }
                  {/* <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img
                        src={cjbairport}
                        className="card-img-top img-thumbnail img-responsive"
                        alt="coimbatore airport"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Coimbatore Airport</h5>
                        <p className="card-text">
                          Updated on 24.08.2023
                        </p>
                        <NavLink to="/coimbatoreAirport" className="btn btn-primary">
                          More Info...
                        </NavLink>
                      </div>
                    </div>
                  </div> */}
                  <br />

                  {/* <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img
                        src={agartalaairport}
                        className="card-img-top img-thumbnail img-responsive"
                        alt="parking"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Agartala Airport</h5>
                        <p className="card-text">
                        Updated on 24.08.2023
                        </p>
                        <NavLink to="/agartalaAirport" className="btn btn-primary">
                          More Info...
                        </NavLink>
                      </div>
                    </div>
                  </div> */}
                  <br />
                  {/* <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img
                        src={chennaiairport}
                        className="card-img-top img-thumbnail img-responsive"
                        alt="parking"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Chennai Airport</h5>
                        <p className="card-text">
                        Updated on 24.08.2023
                        </p>
                        <NavLink to="/chennaiAirport" className="btn btn-primary">
                          More Info...
                        </NavLink>
                      </div>
                    </div>
                  </div> */}
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
