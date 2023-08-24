import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.png";


const Navbar = () => {
  return (
    <>
      <section id="nav-bar">
        <nav className="navbar navbar-expand-xl navbar-light bg-light ">
          <NavLink className="nav-link navbar-brand" to="/">
            <img src={logo} alt="AAI" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" />

            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/chennaiAirport">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  MAA
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/coimbatoreAirport">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  CJB
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/agartalaAirport">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  IXA
                </span>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/transport">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  {/* TRANSPORT */}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/airlines">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  {/* AIRLINES */}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/lounge">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  {/* LOUNGE */}
                </span>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink exact="true" className="nav-link" to="/faq">
                <span
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  {/* FAQ */}
                </span>
              </NavLink>
            </li>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
