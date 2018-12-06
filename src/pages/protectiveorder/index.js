import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import { Button, Span } from "./styles";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
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