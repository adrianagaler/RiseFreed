// eslint-disable-next-line
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";

// This is the page for the Plaintiff form, which includes imported background img, style
const background = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')"
};
const formbackground = {
  backgroundColor: "#FFFFFF",
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
              <input type="text" required />
            </label>
          </div>
          <div>
            <label>
              Is this an apartment building or other multiple family dwelling?
              <div style={letterStyle} />
              <input type="text" required />
            </label>
          </div>
          <div>
            <label>
              Your residential telephone number?
              <div style={letterStyle} />
              <input type="text" required />
            </label>
          </div>
          <div>
            <label>
              Any former address you have left to avoid abuse?
              <div style={letterStyle} />
              <input type="text" required />
            </label>
          </div>
          <div>
            <label>
              What is the name of your workplace?
              <div style={letterStyle} />
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              What is your workplace telephone number?What is your school?
              <div style={letterStyle} />
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              What is your school?
              <div style={letterStyle} />
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              What is the address of your school?
              <div style={letterStyle} />
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Who are people authorized to have access to have this information?
              <div style={letterStyle} />
              <input type="text" />
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
