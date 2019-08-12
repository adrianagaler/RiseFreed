//Created with guidance and reference to the README tutorials on react forms
import React, { Component } from "react";
//The affadavit is structured like a container

/* Import Components and stylies and the 'Link'*/
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { Button1 } from "./styles";
import { Link } from "react-router-dom";
import Background from "./affadavit.jpeg";
//constants for styling
//background image, background design for the form, and button styling
const formbackground = {
  backgroundColor: "#FFFFFF",
  padding: 100,
  margin: 0,
  display: "inline-block",
  fontFamily: "helvetica",
  fontSize: 15,
  textAlign: "left",
  width: 1600,
  backgroundSize: 1600,
  backgroundImage: `url(${Background})`
};
const buttonStyle = {
  width: 100,
  backgroundColor: "#FFFFFF",
  color: "#000000",
  textAlign: "left",
  fontSize: 15,
  margin: 10
};

//creates the form
class protectiveorder extends Component {
  constructor(props) {
    super(props);
    //in the constructur, lists the attributes for this.state - name, email, and about
    this.state = {
      newUser: {
        name: "",
        email: "",
        about: ""
      }
    };
    //defines how the components get mounted
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  //takes in dynamic state, the handleFullName function allows
  //prev state to be updates and to integrate new data with console.log for hthe name attribute
  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, name: value } }),
      () => console.log(this.state.newUser)
    );
  }

  //handleInput works similarly but is specifically for storing values for the inputted text
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, [name]: value } }),
      () => console.log(this.state.newUser)
    );
  }
  //handleTextArea likewise does the same
  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  //handleFormSubmit stores the state of the new user in userData
  //creates the beginnings of a json file to be POSTed for the backend
  //this currently doesn't succesfully work yet because we haven't built
  //out the backend, but works as the beginning of it and how
  //we'll hope to build it out
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  //renders the page, using the components for the form previous ly defined and storing
  //the values for the newUser
  render() {
    return (
      <form
        style={formbackground}
        className="container-fluid"
        onSubmit={this.handleFormSubmit}
      >
        <h2>Please fill out your affadavit.</h2>
        <p>What is your name?</p>
        <Input
          inputType={"text"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <p>What is your email?</p>
        <Input
          inputType={"email"}
          name={"Your Email"}
          value={this.state.newUser.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}
        {/* Email */}
        <p>Please describes your experience of abuse.</p>
        <p>
          When you write about the defendant abusing you include: your injuries,
          when, where, and how the defendant abused you, the kind of medical
          help you got,and if there was a reason you could not get medical
          treatment.
        </p>
        <p>
          Physical harm includes hitting, biting, grabbing, shaking, using a
          weapon, shoving, pushing, punching, slapping, kicking, pulling your
          hair, choking, strangling, throwing things at you, burning you with
          hot food or cigarettes, stabbing, shooting, or locking you in a room.
          Explaining “caused me to engage in sexual relations by force, threat
          or duress” includes threatening, pressuring or forcing you to have
          sex.
        </p>
        <p>
          An example of an affadavit: Last night, November 15, 2006, Jack and I
          were in our kitchen talking about our child. Jack got angry and pushed
          me against the wall. He put his hands around my throat. I could not
          breathe. He loosened his grip for just a second, and I ducked under
          his arms and ran out of the house to a neighbor’s and called 911. The
          police came and talked to Jack. They told him to go take a walk, but I
          was too afraid to go back home. That was not the first time Jack
          abused me. About a month ago, we were in the bedroom late at night. He
          punched me in the face. I told him he had to leave. He did. The next
          morning, my face was all swollen. I could not see out of one eye. I
          called a friend who took me to the doctor. I needed stitches.
        </p>
        <TextArea
          rows={20}
          value={this.state.newUser.about}
          cols={200}
          name={"affadavit"}
          handleChange={this.handleTextArea}
          placeholder={"Describe how and when you were abused"}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <div>
          <Link to="/">
            <Button1> Go back to Homepage</Button1>
          </Link>
        </div>
      </form>
    );
  }
}

export default protectiveorder;
