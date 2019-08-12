import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../LandingPage/photos/logo.png";
import Background from "./faq.jpeg";
// FAQS. To be completed with user's most frequent questions. Has object background with components:letterStyle
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
  color: "#FFFFFF"
};

// Navbar defined here too. Links to the rest of the pages
class FormsPage extends React.Component {
  render() {
    return (
      <form style={background}>
        <div className="desktop_hd-0-0-0-0-0-0">
          <div className="desktop_hd-path-1">
            <div className="desktop_hd-0-0-0-0-0-0-0-0">
              <img src={logo} alt="" className="desktop_hd-risefreed_2" />
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
                    <Link to="/about"> About </Link>
                  </div>
                </div>
              </div>
              <div className="desktop_hd-0-0-0-0-0-0-0-0-3">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-3-0">
                  <div className="desktop_hd-faqs-3">
                    <Link to="/contact"> Contact </Link>
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
          <div>
            <h3>Our FAQs are still being built out!</h3>
          </div>
          <br />
          <div>
            {" "}
            <h3>
              {
                "We’d love to hear from you. Ask us any questions on the contact us page."
              }{" "}
            </h3>
          </div>
        </div>
      </form>
    );
  }
}

export default FormsPage;
