import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Button, Span } from "./styles";
class FormsPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Plaintiff Form</h1>
        <label>
        What is your name?
        <input type="text" required  name="name" placeholder="full name"/>
        </label>
        <label>
        Your date of birth?
          <input type="text"  />
        </label>
        <label>
        Your residential Address?
        <input type="text" />
        </label>
        <label>
        Is this an apartment building or other multiple family dwelling?
        <input type="number"  />
        </label>
        <label>
        Your residential telephone number?
        <input type="number"  />
        </label>
        <label>
        Any former address you have left to avoid abuse?
        <input type="text"  />
        </label>
        <label>
        What is the name of your workplace?
        <input type="text" />
        </label>
        <label>
        What is your workplace telephone number?What is your school?
        <input type="text"  />
        </label>
        <label>
        What is your school?
        <input type="text" />
        </label>
        <label>
        What is the address of your school?
        <input type="text" />
        </label>
        <label>
        Who are people authorized to have access to have this information?
        <input type="text"  />
        
        </label>
          <Link to="/plaintiff">
            <Button> <Span/> Defendant Form</Button>
          </Link>
          <Link to="/list">
            <Button> <Span/> Go back to forms list</Button>
          </Link>
      </form>
    );
  }
}

export default FormsPage;