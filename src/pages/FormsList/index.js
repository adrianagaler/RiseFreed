import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import logo from "../LandingPage/photos/logo.png";
// FormsList index
class FormsPage extends Component {
  render() {
    return (
      // this page preserves the navbar from the homepage to be more user friendly
      <div className="hd_hd-1">
        <div className="hd-0">
          <div className="hd-path-2">
            <div className="hd-0-0-0">
              <img src={logo} alt="" className="risefreed" />
              <div className="desktop_hd-0-0-0-0-0-0-0-0-1">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-1-0">
                  <div className="desktop_hd-about-1">
                    <Link to="/about"> About </Link>
                  </div>
                </div>
              </div>
              <div className="desktop_hd-0-0-0-0-0-0-0-0-2">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-2-0">
                  <div className="contact_us-1">
                    <Link to="/contact"> Contact Us </Link>
                  </div>
                </div>
              </div>
              <div className="desktop_hd-0-0-0-0-0-0-0-0-3">
                <div className="desktop_hd-0-0-0-0-0-0-0-0-3-0">
                  <div className="desktop_hd-faqs-3">
                    <Link to="/faq">FAQs</Link>{" "}
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
        <div className="desktop_hd-1">
          <div className="desktop_hd-aditya-romansa-1">
            <div className="desktop_hd-1-0-0">
              <div className="desktop_hd-path-1">
                <div className="desktop_hd-1-0-0-0-0">
                  <div className="desktop_hd-please_fill_out_the-2">
                    {"Please fill out the following forms in order:"}
                  </div>
                </div>
              </div>
            </div>
            {/* Links to forms. To be completed with more forms and digitalized. */}
            <div className="desktop_hd-1-0-1">
              <div className="desktop_hd-1_">
                {" "}
                <Link to="/eligibility">1. Eligibility Confirmation </Link>
              </div>
            </div>
            <div className="desktop_hd-1-0-2">
              <div className="desktop_hd-2_">
                {" "}
                <Link to="/plaintiff">
                  2. Plaintiff Confidential Information Form{" "}
                </Link>
              </div>
            </div>
            <div className="desktop_hd-1-0-3">
              <div className="desktop_hd-3">
                {" "}
                <Link to="/defendant">
                  3. Defendant Confidential Information Form{" "}
                </Link>
              </div>
            </div>
            <div className="desktop_hd-1-0-4">
              <div className="desktop_hd-4">
                <Link to="/protectiveorder">
                  4. 209A Protective Order Form{" "}
                </Link>
              </div>
            </div>
            <div className="desktop_hd-1-0-5">
              <div className="desktop_hd-5">
                {" "}
                <Link to="/affadavit">5. Affadavit</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop_hd-2" />
      </div>
    );
  }
}

export default FormsPage;
