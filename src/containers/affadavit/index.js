import React, {Component} from 'react';  

/* Import Components */
import Input from '../../components/Input';  
import TextArea from '../../components/TextArea';  
import Button from '../../components/Button';
import { Button1 } from "./styles";
import { Link } from "react-router-dom";


class protectiveorder extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        about: ''

      },

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   


  render() {
    var background = {
    backgroundImage: "url('https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')",
  }
  var formbackground = {
    backgroundColor: "#FFFFFF",
    padding: 30,
    margin: 20,
    display: "inline-block",
    fontFamily: "helvetica",
    fontSize: 15,
    textAlign: "left",
    width: 1200,
  }
  var buttonStyle = {
    width: 100,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    textAlign: "left",
    fontSize: 15,
    margin: 10
  };
    return (
    
        <form style = {formbackground} className="container-fluid" onSubmit={this.handleFormSubmit}>
       
        <h2>Please fill out your affadavit.</h2>
        <p>What is your name?</p>
            <Input inputType={'text'}
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Name of the user */}
          <p>What is your email?</p>
          <Input inputType={'email'} 
                name={'Your Email'}
                 value={this.state.newUser.email} 
                placeholder = {'Enter your email'}
                 handleChange={this.handleInput} /> {/* Email */} 
          <p>Please describes your experience of abuse.</p>
          <p>When you write about the defendant abusing you include: your injuries, when, where, and how the defendant abused you,
            the kind of medical help you got,and if there was a reason you could not get medical treatment.</p>
          <p>Physical harm includes hitting, biting, grabbing, shaking, using a weapon, shoving, pushing, punching, slapping, kicking, pulling your hair, choking, strangling, throwing things at you, burning you with hot food or cigarettes, stabbing, shooting, or locking you in a room. Explaining “caused me to engage in sexual relations by force, threat or duress” includes threatening, pressuring or forcing you to have sex.</p>
          <p>An example of an affadavit:
Last night, November 15, 2006, Jack and I were in our kitchen talking about our child. Jack got angry and pushed me against the wall. He put his hands around my throat. I could not breathe. He loosened his grip for just a second, and I ducked under his arms and ran out of the house to a neighbor’s and called 911. The police came and talked to Jack. They told him to go take a walk, but I was too afraid to go back home.
That was not the first time Jack abused me. About a month ago, we were in the bedroom late at night. He punched me in the face. I told him he had to leave. He did. The next morning, my face was all swollen. I could not see out of one eye. I called a friend who took me to the doctor. I needed stitches.</p>
          <TextArea
            rows={20}
            value={this.state.newUser.about}
            cols = {200}
            name={'affadavit'}
            handleChange={this.handleTextArea}
            placeholder={'Describe how and when you were abused'} />{/* About you */}


          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <div>
          <Link to="/">
            <Button1>  Go back to Homepage</Button1>
          </Link>
          </div>
        </form>
  
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default protectiveorder;