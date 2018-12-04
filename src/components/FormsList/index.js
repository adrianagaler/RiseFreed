import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Div, Span } from "./styles";

class FormsPage extends Component {
  render() {
    return (
    <Container>
    <Div>
      <h1>Forms List in the suggested filling order </h1>
      <ul>
        <Link to="/protective">
          <Button> <Span/> Protective Order Eligibility</Button>
        </Link>
      </ul>
      <ul>
        <Link to="/plaintiff">
          <Button> <Span/> Plaintiff Confidential Information Form</Button>
        </Link>
      </ul>
      <ul>
        <Link to="/defendant">
          <Button> <Span/> DEFENDANT CONFIDENTIAL INFORMATION FORM</Button>
        </Link>
      </ul>
      <ul>
        <Link to="/">
          <Button> <Span/> 209 A</Button>
        </Link>
      </ul>
      <ul>
        <Link to="/">
          <Button> <Span/> AFFADAVIT</Button>
        </Link>
      </ul>
      <ul>
        <Link to="/">
          <Button> <Span/> 209A (2) FOR CHILDREN</Button>
        </Link>
      </ul>
    </Div>
  </Container>
    
    );
  }
}

export default FormsPage;

