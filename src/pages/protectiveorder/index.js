import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import { Button, Span } from "./styles";
import { Link } from "react-router-dom";

// This is the component of 209 Protective Order Form
class Form extends React.Component {
  // Defines the state
  constructor(props) {
    super(props);
    this.el = null;
  }

  // Includes the API embedded typeform on top of the page
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, "https://carissa63.typeform.com/to/gNxejx", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }
  render() {
    return (
      <form>
      <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
      
      {/* Redirects the user with links to other forms and mainpage */}
      <div>
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
    )
  }
}

export default Form;