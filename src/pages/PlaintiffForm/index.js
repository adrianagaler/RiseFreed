import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Button, Span } from "./styles";


class FormsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  var background = {
    backgroundImage: "url('https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')",
  }
  var formbackground = {
    backgroundColor: "#FFFFFF",
    padding: 60,
    margin: 70,
    display: "inline-block",
    fontFamily: "helvetica",
    fontSize: 20,
    textAlign: "left",
    width: 1200,
  }
  var letterStyle = {
    margin: 5,
    display: "inline-block",
    fontFamily: "helvetica",
    fontSize: 20,
    textAlign: "left"
  };
  var hel = {
    padding: 5,
  }
  var h ={
    padding: 50,
    color: "#FFFFFF",
    fontFamily: "sans-serif",
  }
    return (
      <form onSubmit={this.handleSubmit} style = {background}>
        <h2 style = {h}>Plaintiff Information Form</h2>
        <fieldset style = {formbackground}>
        <div>
        <label>
        What is your name?
        <div style = {letterStyle}></div>
        <input type="text" required  name="name" placeholder="full name"/>
        </label>
        </div>
        <div>
        <label>
        Your residential Address?
        <div style = {letterStyle}></div>
        <input type="text" required  />
        </label>
        </div>
        <div>
        <label>
        Is this an apartment building or other multiple family dwelling?
        <div style = {letterStyle}></div>
        <input type="text" required />
        </label>
        </div>
        <div>
        <label>
        Your residential telephone number?
        <div style = {letterStyle}></div>
      <input type="text" required />
        </label></div>
        <div>
        <label>
        Any former address you have left to avoid abuse?
        <div style = {letterStyle}></div>
        <input type="text" required/>
        </label>
        </div>
        <div>
        <label>
        What is the name of your workplace?
        <div style = {letterStyle}></div>
        <input type="text"  />
        </label>
        </div>
        <div>
        <label>
        What is your workplace telephone number?What is your school?
        <div style = {letterStyle}></div>
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        What is your school?
        <div style = {letterStyle}></div>
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        What is the address of your school?
        <div style = {letterStyle}></div>
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Who are people authorized to have access to have this information?
        <div style = {letterStyle}></div>
        <input type="text" /></label>
        </div>

         </fieldset>
         <div style = {hel}>
         <Link to="/list">
            <Button> <Span/> Go back to next form</Button>
          </Link>
          <Link to="/list">
            <Button> <Span/> Select a different form</Button>
          </Link>
          <Link to="/">
            <Button> <Span/> Go back to Homepage</Button>
          </Link>
          </div>
      </form>
    );
  }
}

export default FormsPage;




