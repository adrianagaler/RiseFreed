import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles1.css";
import icon from "./photos/logo.png";
import sponsor1 from "./photos/cs50.png";
import sponsor2 from "./photos/legal_aid_bureau.jpg";
// Homepage
class LandingPage extends Component {
  render() {
    return (
      <body>
        <div className="header-0-1">
          <div className="header-0-2">
            <div className="header-0-3">
              <div className="hd-0-4">
                <div className="hd-0-5">
                  <div className="background">
                    <div className="hd-0-6">
                      <div className="hd-1-1">
                        <div className="hd-0-7">
                          {/* Div for the main img and the Navbar, which links to About, contact us, FAQs, Forms*/}
                          <img src={icon} alt="" className="icon" />
                          <div className="hd-0-8">
                            <div className="hd-0-9">
                              <div className="about">
                                <Link to="/about"> About </Link>
                              </div>
                            </div>
                          </div>
                          <div className="hd-2-1">
                            <div className="hd-2-2">
                              <div className="contact_us">
                                <Link to="/contact"> Contact Us </Link>
                              </div>
                            </div>
                          </div>
                          <div className="hd-3-0">
                            <div className="hd-3-1">
                              <div className="faqs-3">
                                <Link to="/faq">FAQs</Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="hd-4-0">
                            <div className="hd-4-1">
                              <div className="desktop_hd-forms-1">
                                <Link to="/list"> Forms </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Header message */}
                    <div className="hd-1-3">
                      <div className="freedom_is_safety">
                        Freedom is safety.
                      </div>
                    </div>
                    {/* Text on the page */}
                    <div className="hd-2-3">
                      <div className="filing_a_protective">
                        <div>Filing a protective order is </div>
                        <div>a first step to freedom.</div>
                      </div>
                    </div>
                    <div className="hd-3-2">
                      <div className="goal">
                        Our project helps you file for a restraining order from
                        an abusive partner, guiding you at every step.
                      </div>
                    </div>
                    <div className="hd-4-0">
                      <div className="hd-4-1">
                        <div className="hd-4-2">
                          <div className="hd-4-3">
                            <Link to="/list">
                              {"Should I consider a protective order?"}{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hd-5-0">
                      <div className="confidentiality">
                        <div>Your information will only be shared </div>
                        <div>with a pro bono domestic violence attorney. </div>
                      </div>
                    </div>
                  </div>
                  <div className="hd-6-0">
                    <div className="hd-6-1">
                      <div className="sponsors">
                        Proudly created with the guidance of the following
                      </div>
                    </div>
                    <div className="hd-6-2">
                      <img src={sponsor1} alt="" className="cs50" />
                      <div className="hd-6-3">
                        <div className="hd-6-4">
                          <img
                            src={sponsor2}
                            alt=""
                            className="legalaidbureau"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Presenting some helpful resources, mostly text on top of an image  */}
          <div className="hd-6-5">
            <div className="hd-6-6">
              <div className="hd-6-7">
                <div className="hd-6-8">
                  <div className="hd-7-0" />
                  <div className="hd-7-1">
                    <div className="hd-7-2">
                      <div className="resources">
                        The National Domestic Violence Hotline
                      </div>
                      <div className="cambridge_police">
                        Cambridge Police Department
                      </div>
                    </div>
                    <div className="hd-7-3">
                      <div className="hd-7-4">
                        <div className="hd-7-5">
                          <div className="respond">RESPOND inc.</div>
                        </div>
                      </div>
                      <div className="hd-7-6">
                        <div className="hd-7-7">
                          <div className="casa_myrna">Casa Myrna</div>
                        </div>
                      </div>
                    </div>
                    <div className="hd-8-0">
                      <div className="atask">
                        ATASK - Asian Domestic Violence Shelter
                      </div>
                      <div className="national_resource">
                        National Resource Center on Domestic Violence
                      </div>
                    </div>
                    <div className="hd-8-1">
                      <div className="hd-8-2">
                        FreeFrom - Economic Empowerment
                      </div>
                      <div className="transition_house">Transition House</div>
                    </div>
                    <div className="hd-8-3">
                      <div className="jane_doe">Jane Doe Inc.</div>
                      <div className="safe_haven">Safe Haven</div>
                    </div>
                  </div>
                  <div className="belief">
                    <div>We believe that everyone has the right</div>
                    <div>to be free and feel safe in their own home.</div>
                    <br />
                    <div>Domestic violence is the most common killer of </div>
                    <div>women around the world. 70 percent of women </div>
                    <div>will face intimate partner violence.</div>
                    <br />
                    <div>This issue affects both men and our nation too. </div>
                    <div>
                      Domestic violence is a leading cause of homelessness{" "}
                    </div>
                    <div>
                      and homicide. It costs our U.S. economy over $55 billion{" "}
                    </div>
                    <div>
                      in lost hours worked. We all know sons and daughters of
                    </div>
                    <div>survivors.</div>
                    <br />
                    <div>
                      We want to help survivors get back on their feet. And we{" "}
                    </div>
                    <div>
                      {
                        "want something more than that too – if the legal system "
                      }
                    </div>
                    <div>
                      can protect victims,we can also prevent abusers from
                      hurting{" "}
                    </div>
                    <div>
                      their loved ones and give kids a better childhood.{" "}
                    </div>
                    <br />
                    <div>Together, we can all rise freed. </div>
                    <br />
                    <br />
                    <div> </div>
                    <br />
                    <br />
                    <div> </div>
                  </div>
                  <div className="other">
                    Other resources to secure your rights
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header1" />
        </div>
      </body>
    );
  }
}

export default LandingPage;
