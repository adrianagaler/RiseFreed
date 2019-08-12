import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Background from "./pen.jpg";
import imag from "../LandingPage/photos/logo.png";
const background = {
  backgroundSize: 1600,
  backgroundImage: `url(${Background})`
};

const letterStyle = {
  margin: 100,
  display: "inline-block",
  fontFamily: "helvetica",
  fontSize: 20,
  textAlign: "left",
  color: "#000000"
};

class FormsPage extends React.Component {
  render() {
    return (
      <form style={background}>
        <div className="desktop_hd-0-0-0-0-0-0">
          <div className="desktop_hd-path-1">
            <div className="desktop_hd-0-0-0-0-0-0-0-0">
              <img src={imag} alt="" className="desktop_hd-risefreed_2" />
              <div className="desktop_hd-0-0-0-0-0-0-0-0-1">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-1-0">
                  <div className="desktop_hd-about-1">
                    <Link to="/"> Home </Link>
                  </div>
                </div>
              </div>
              <div className="desktop_hd-0-0-0-0-0-0-0-0-2">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-2-0">
                  <div className="desktop_hd-contact_us-1">
                    <Link to="/contact"> Contact Us </Link>
                  </div>
                </div>
              </div>
              <div className="desktop_hd-0-0-0-0-0-0-0-0-3">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-3-0">
                  <div className="desktop_hd-faqs-3">
                    <Link to="/faq"> FAQs</Link>
                  </div>
                </div>
              </div>
              <div className="desktop_hd-0-0-0-0-0-0-0-0-4">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-4-0">
                  <div className="desktop_hd-forms-1">
                    <Link to="/list"> Forms </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={letterStyle}>
          <h2>
            RiseFreed was created by two roommates with a passion for tech and
            gender equality.
          </h2>
          <br />
          <div>
            <h3>
              Our project was coded in the common room of our dorm room on
              multiple late nights.
            </h3>
          </div>
          <br />
          <div>
            <h3>Our dream is to help women feel empowered and free.</h3>
          </div>
          <br />
          <div>
            <h3>
              Contact us at cjchen@college.harvard.edu and
              adrianarotaru@college.harvard.edu.
            </h3>
          </div>
          <br />
          <div>
            {" "}
            <h3>{"We’d love to hear from you."} </h3>
          </div>
        </div>
      </form>
    );
  }
}

export default FormsPage;
