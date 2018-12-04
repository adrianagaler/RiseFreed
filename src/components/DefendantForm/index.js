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
        <h2>Please provide as much info as possible!</h2>
        <fieldset>
        <legend>Defendant Form:</legend>
        <div>
        <label>
        What is the name of the person you would like to get a restraining order from?
        <input type="text" required  name="name" placeholder="full name"/>
        </label>
        </div>
        <div>
        <label>
        Any other names used by the defendant if any?
        <input type="text" required  name="name" placeholder="full name"/>
        </label>
        </div>
        <div>
        <label>
        Your date of birth?
        <input type="text" required  name="name" placeholder="YYYY/MM/DD"/>
        </label>
        </div>
        <div>
        <label>
        Place of Birth?
      <input type="text" required  name="name"/>
        </label></div>
        <div>
        <label>
        Social Security Number?
        <input type="text" required placeholder="000-00-0000"/>
        </label>
        </div>
        <div>
        <label>
        Mother’s maiden name?
        <input type="text"  />
        </label>
        </div>
        <div>
        <label>
        Father’s name?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Sex?
        <input type="radio" />Female
        <input type="radio" />Male
        <input type="radio" />Other
        </label>
        </div>


        <div>
        <label>
        Race?
        <select placeholder="none">
        <option value="Caucasian">Caucasian</option>
         <option value="African American">African American</option>
        <option value="Asian">Asian</option>
         <option value="Hispanic">Hispanic</option>
         <option value="Hispanic">Hispanic</option>
        </select>
        </label>
        </div>
        <div>
        <label>
        Eyes?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        <div>
        <label>
        Hair
        <input type="text" />
        </label>
        </div>
        Height
        <input type="number" required placeholder="in inches" />
        </label>
        </div>
        <div>
        <label>
        Weight
        <input type="number" required placeholder="in lbs" />
        </label>
        </div>
        <div>
        <label>
        Include Photo
        <input type="file" name="pic" accept="image/*"/>
        </label>
        </div>
        <div>
        <label>
        Build?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Other physical characteristics? (beard, glasses, tattoos, etc.)
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Home address?
        <input type="text"  />
        </label>
        </div>
        <div>
        <label>
        Home telephone No.?
        <input type="text" required placeholder="000-000-0000" />
        </label>
        </div>

        <div>
        <label>
        Apt no?
        <input type="text"   />
        </label>
        </div>
        <div>
        <label>
        Floor no?
        <input type="text"   />
        </label>
        </div>
        <div>
        <label>
        Name on door/mailbox:
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Does the defendant understand English?
        <input type="radio" />Yes
        <input type="radio" />No
        <input type="radio" />N/a
        </label>
        </div>
        <div>
        <label>
        Workplace?
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Work telephone no?
        <input type="text" placeholder="000-000-0000"/>
        </label>
        </div>
        <div>
        <label>
        Work address:
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Title:
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Department:
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Work hours?
        <input type="numbers" placeholder="ex: 8"/>
        </label>
        </div>
        <div>
        <label>
        Other places defendant may be found (friends, bars, relatives, hangouts)
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Best place to find defendant? Best times?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Motor vehicle license plate?Year?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Year?
        <input type="text" placeholder="YYYY"/>
        </label>
        </div>
        <div>
        <label>
        Make?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Model?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Color?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Does this person have a history of violence toward polic officers?
        <input type="radio" /> Yes
        <input type="radio" /> No
        </label>
        </div>
        <div>
        <label>
        A history of using/abusing drugs or alcohol?
        <input type="radio" /> Yes
        <input type="radio" /> No
        </label>
        </div>
        <div>
        <label>
        If yes: what kind?
        <input type="text" />
        </label>
        </div>
        <div>
        <label>
        Access to guns, a license to carry, or possess a gun?
        <input type="radio" /> Yes
        <input type="radio" /> No
        </label>
        </div>
        <div>
        <label>
        If yes, what kind?
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Psychiatric/emotional problems?
        <input type="radio" /> Yes
        <input type="radio" /> No
        </label>
        </div>
        <div>
        <label>
        If yes, what kind? 
        <input type="text"/>
        </label>
        </div>
        <div>
        <label>
        Any other information helpful in locating this person
        <input type="textarea"/>
        </label>
        </div>
         </fieldset>
         <Link to="/list">
            <Button> <Span/> Go back to next form</Button>
          </Link>
          <Link to="/list">
            <Button> <Span/> Select a different form</Button>
          </Link>
          <Link to="/">
            <Button> <Span/> Go back to Homepage</Button>
          </Link>
      </form>
    );
  }
}

export default FormsPage;




