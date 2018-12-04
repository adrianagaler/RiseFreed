import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Div, Span } from "./styles";

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Div>
          <ul>
            <h1>Welcome to Legal Form Search!</h1>
            <Link to="/list">
              <Button> <Span/> Should I Consider a protective order</Button>
            </Link>
          </ul>
        </Div>
      </Container>
    );
  }
}
export default LandingPage;