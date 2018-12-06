import React, { Component } from "react";
import { Link } from "react-router-dom";
import './forms.css';

// FormsList index
class FormsPage extends Component {
    render() {
        return (
            // this page preserves the navbar from the homepage to be more user friendly
            <div className="desktop_hd-desktop_hd-1">
                <div className="desktop_hd-0">
                    <div className="desktop_hd-path-2">
                        <div className="desktop_hd-0-0-0">
                            <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1117991013822189-1543901766381-815FF556-B02F-4C03-9AC0-076CC349059C.png" className="desktop_hd-risefreed_2" />
                            <div className="desktop_hd-0-0-0-0-0-0-0-0-1">
                                <div className="desktop_hd-0-0-0-0-0-0-0-0-1-0">
                                    <div className="desktop_hd-about-1"><Link to="/about"> About </Link></div>
                                </div>
                            </div>
                            <div className="desktop_hd-0-0-0-0-0-0-0-0-2">
                                <div className="desktop_hd-0-0-0-0-0-0-0-0-2-0">
                                    <div className="desktop_hd-contact_us-1"><Link to="/contact"> Contact Us </Link></div>
                                </div>
                            </div>
                            <div className="desktop_hd-0-0-0-0-0-0-0-0-3">
                                <div className="desktop_hd-0-0-0-0-0-0-0-0-3-0">
                                    <div className="desktop_hd-faqs-3"><Link to="/faq">FAQs</Link> </div>
                                </div>
                            </div>
                            <div className="desktop_hd-0-0-0-0-0-0-0-0-4">
                                <div className="desktop_hd-0-0-0-0-0-0-0-0-4-0">
                                    <div className="desktop_hd-forms-1"><Link to="/list"> Forms </Link></div>
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
                            <div className="desktop_hd-1_"> <Link to="/eligibility">
                                1. Eligibility Confirmation </Link>
                            </div>
                        </div>
                        <div className="desktop_hd-1-0-2">
                            <div className="desktop_hd-2_"> <Link to="/plaintiff">
                                2. Plaintiff Confidential Information Form </Link>
                            </div>
                        </div>
                        <div className="desktop_hd-1-0-3">
                            <div className="desktop_hd-3"> <Link to="/defendant">
                                3. Defendant Confidential Information Form </Link>
                            </div>
                        </div>
                        <div className="desktop_hd-1-0-4">
                            <div className="desktop_hd-4"><Link to="/protectiveorder">
                                4. 209A Protective Order Form </Link>
                            </div>
                        </div>
                        <div className="desktop_hd-1-0-5">
                            <div className="desktop_hd-5"> <Link to="/affadavit">5. Affadavit</Link></div>
                        </div>
                    </div>
                </div>
                <div className="desktop_hd-2" />
            </div>
        );
    }
};

export default FormsPage;

