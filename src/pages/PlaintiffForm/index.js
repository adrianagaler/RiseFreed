// eslint-disable-next-line
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";
import Background from "./creativity.jpg";
// This is the page for the Plaintiff form, which includes imported background img, style
const background = {
  backgroundImage: `url(${Background})`
};
const formbackground = {
  backgroundColor: "#000000",
  backgroungSize: 50,
  padding: 60,
  margin: 70,
  display: "inline-block",
  fontFamily: "helvetica",
  fontSize: 20,
  textAlign: "left",
  width: 1200
};
const letterStyle = {
  margin: 5,
  display: "inline-block",
  fontFamily: "helvetica",
  fontSize: 20,
  color: "#000000",
  textAlign: "left"
};
const hel = {
  padding: 5
};
const h = {
  padding: 50,
  color: "#FFFFFF",
  fontFamily: "sans-serif"
};

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // handle submit is called as an embedded react function and the
      // class background, which includes letterstyle, formabackground, h are called for the form style
      <form onSubmit={this.handleSubmit} style={background}>
        <h2 style={h}>Plaintiff Information Form</h2>
        <fieldset style={formbackground}>
          <div>
            <label>
              What is your name?
              <div style={letterStyle} />
              <input type="text" required name="name" placeholder="full name" />
            </label>
          </div>
          <div>
            <label>
              Your residential Address?
              <div style={letterStyle} />
              <input
                type="text"
                required
                placeholder="Street Name, City, State, ZipCode"
              />
            </label>
          </div>
          <div>
            <label>
              Is this an apartment building or other multiple family dwelling?
              <div style={letterStyle} />
              <input type="text" required placeholder="N/o" />
            </label>
          </div>
          <div>
            <label>
              Your residential telephone number?
              <div style={letterStyle} />
              <input type="text" required placeholder="XXX-XXX-XXXX" />
            </label>
          </div>
          <div>
            <label>
              Any former address you have left to avoid abuse?
              <div style={letterStyle} />
              <input
                type="text"
                required
                placeholder="Street Name, City, State, ZipCode"
              />
            </label>
          </div>
          <div>
            <label>
              What is the name of your workplace?
              <div style={letterStyle} />
              <input type="text" placeholder="Workplace Name" />
            </label>
          </div>
          <div>
            <label>
              What is your workplace telephone number?
              <div style={letterStyle} />
              <input type="text" placeholder="XXX-XXX-XXXX" />
            </label>
          </div>
          <div>
            <label>
              What is your school?
              <div style={letterStyle} />
              <input type="text" placeholder="School Name" />
            </label>
          </div>
          <div>
            <label>
              What is the address of your school?
              <div style={letterStyle} />
              <input
                type="text"
                placeholder="Street Name, City, State, ZipCode"
              />
            </label>
          </div>
          <div>
            <label>
              Who are people authorized to have access to have this information?
              <div style={letterStyle} />
              <input type="text" placeholder="Name" />
            </label>
          </div>
        </fieldset>
        <div style={hel}>
          {/* links the page to next form, the forms list, and the homepage. */}
          <Link to="/list">
            {/* <Button> <Span/> Go back to next form</Button> */}
            <Button> Go back to next form</Button>
          </Link>
          <Link to="/list">
            <Button> Select a different form</Button>
          </Link>
          <Link to="/">
            <Button> Go back to Homepage</Button>
          </Link>
        </div>
      </form>
    );
  }
}
// eslint-disable-next-line
export default FormsPage;
