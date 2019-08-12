// eslint-disable-next-line
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";
import eligibility from "./eligibility.jpeg";
// Eligibility for filling the forms. Needs to be updated to restrict access to other forms if user is not elligible

// Pre-defined objects: background with its styling components
const background = {
  backgroundImage: `url(${eligibility})`
};
const letterStyle = {
  margin: 50,
  display: "inline-block",
  fontFamily: "sans-serif",
  fontSize: 25,
  color: "#FFFFFF",
  textAlign: "left"
};
const buttonstyle = {
  padding: 50
};

// The functions that handles the input of checkboxes
class FormsPage extends React.Component {
  constructor() {
    super();
    this.state = { isChecked: false };
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
  }
  // handlechecked is supposed to change the state of a checkbox onclick and memorize this state
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  // multifunctional feature, can be called upon any change and can be suplemented with complex features
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  // function called on submit: counts how many checkboxes are checked and alerts the user about their elligibility
  handleSubmit(event) {
    // prevents default submission
    event.preventDefault();
    // stores the checbox info as a dictionary ({class of the checkbox: true/false})
    var checks = document.getElementsByClassName("checkbox");
    // keeps track of the number of checkboxes clicked
    var count = 0;
    for (var i = 0; i < 3; i++) {
      if (checks[i].checked === true) {
        count = count + 1;
      }
    }
    if (count !== 3) {
      // link= "http://localhost:3003/"; to be updated to direct the user upon submit directly to a specific link based on eligibility
      alert(
        "Unfortunately, you are not eligible for a plaintiff form.Please click non-eligible to access other resources"
      );
      // return link;
    } else {
      // link="http://localhost:3003/list";
      alert('done. Click "Eligible" to acces the next form');
      // return link;
    }
  }

  render() {
    return (
      // call handle submit upon submit
      <form onSubmit={this.handleSubmit} style={background}>
        <div style={letterStyle}>
          <h2>Protective Order Elgibility Confirmation</h2>
          <table>
            <td>
              <p>
                Were you and your abuser married, residing together, in a
                substantive dating or engagement relationship, related by blood
                or marriage, or have a child in common?
              </p>
              <input
                type="checkbox"
                class="checkbox"
                name="q1"
                value="Test1"
                onChange={this.handleChecked}
              />
              <p>
                Are you suffering from abuse because your abuser has harmed or
                attempted to harm you physically, or put you in fear of imminent
                serious physical harm, or caused you to engage in sexual
                relations involuntarily by using force, threat or duress?
              </p>
              <input type="checkbox" class="checkbox" name="q2" value="Test2" />
              <p>
                Are you currently living within the geographical area of this
                court, or used to live within the geographical area of this
                court but you left to avoid abuse?{" "}
              </p>
              <input
                type="checkbox"
                class="checkbox"
                name="q3"
                value="Test3"
                onclick={this.handleSubmit}
              />
            </td>
          </table>
        </div>
        {/* create the buttons which link to either the forms list(if eligible) and to the homepage(if not eligible) */}
        <div style={buttonstyle}>
          <Button className="btn btn-default" type="submit">
            Check
          </Button>
          <Link to="/list">
            <Button> I am eligible</Button>
          </Link>
          <Link to="/">
            <Button>I am not eligible</Button>
          </Link>
        </div>
      </form>
    );
  }
}
export default FormsPage;
