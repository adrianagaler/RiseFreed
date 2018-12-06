import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Button, Span } from "./styles";

const background = {
  backgroundImage: "url('https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80')",
}
const formbackground = {
  backgroundColor: "#FFFFFF",
}
const letterStyle = {
  margin: 50,
  display: "inline-block",
  fontFamily: "helvetica",
  fontSize: 20,
  textAlign: "left"
};
const hel = {
  margin: 5,
}
const h = {
  color: "#FFFFFF",
  fontFamily: "sans-serif",
}

class FormsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={background}>
        <div style={letterStyle}>
          <h2 style={h}>Defendant Information Form</h2>
          <fieldset style={formbackground}>
            <div>
              <label>
                What is the name of the person you would like to get a restraining order from?
        <div style={hel}>
                  <input type="text" required name="name" placeholder="full name" />
                </div>
              </label>
            </div>
            <div>
              <label>
                Any other names used by the defendant if any?
        <div style={hel}>
                  <input type="text" required name="name" placeholder="full name" />
                </div>
              </label>
            </div>
            <div>
              <label>
                Your date of birth?
        <div style={hel}>
                  <input type="text" required name="name" placeholder="YYYY/MM/DD" />
                </div>
              </label>
            </div>
            <div>
              <label>
                Place of Birth?
        <div style={hel}>
                  <input type="text" required name="name" />
                </div>
              </label></div>
            <div>
              <label>
                Social Security Number?
        <div style={hel}>
                  <input type="text" required placeholder="000-00-0000" />
                </div>
              </label>
            </div>
            <div>
              <label>
                Mother’s maiden name?
        <div style={hel}>
                  <input type="text" />
                </div>
              </label>
            </div>
            <div>
              <label>
                Father’s name?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Sex?
        <div style={hel}>
                  <input type="radio" />Female
        <input type="radio" />Male
        <input type="radio" />Other</div>
              </label>
            </div>
            <div>
              <label>
                Race?
        <div style={hel}>
                  <select placeholder="none">
                    <option value="Caucasian">Caucasian</option>
                    <option value="African American">African American</option>
                    <option value="Asian">Asian</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Hispanic">Hispanic</option>
                  </select>
                </div>
              </label>
            </div>
            <div>
              <label>
                Eyes?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                <div>
                  <label>
                    Hair
        <div style={hel}>
                      <input type="text" /></div>
                  </label>
                </div>
                Height
        <div style={hel}>
                  <input type="number" required placeholder="in inches" /></div>
              </label>
            </div>
            <div>
              <label>
                Weight
        <div style={hel}>
                  <input type="number" required placeholder="in lbs" /></div>
              </label>
            </div>
            <div>
              <label>
                Include Photo
        <div style={hel}>
                  <input type="file" name="pic" accept="image/*" /></div>
              </label>
            </div>
            <div>
              <label>
                Build?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Other physical characteristics? (beard, glasses, tattoos, etc.)
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Home address?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Home telephone No.?
        <div style={hel}>
                  <input type="text" required placeholder="000-000-0000" /></div>
              </label>
            </div>

            <div>
              <label>
                Apt no?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Floor no?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Name on door/mailbox:
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Does the defendant understand English?
        <div style={hel}>
                  <input type="radio" />Yes
        <input type="radio" />No
        <input type="radio" />N/a</div>
              </label>
            </div>
            <div>
              <label>
                Workplace?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Work telephone no?
        <div style={hel}>
                  <input type="text" placeholder="000-000-0000" /></div>
              </label>
            </div>
            <div>
              <label>
                Work address:
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Title:
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Department:
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Work hours?
        <div style={hel}>
                  <input type="numbers" placeholder="ex: 8" /></div>
              </label>
            </div>
            <div>
              <label>
                Other places defendant may be found (friends, bars, relatives, hangouts)
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Best place to find defendant? Best times?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Motor vehicle license plate?Year?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Year?
        <div style={hel}>
                  <input type="text" placeholder="YYYY" /></div>
              </label>
            </div>
            <div>
              <label>
                Make?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Model?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Color?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Does this person have a history of violence toward polic officers?
        <div style={hel}>
                  <input type="radio" /> Yes
        <input type="radio" /> No</div>
              </label>
            </div>
            <div>
              <label>
                A history of using/abusing drugs or alcohol?
        <div style={hel}>
                  <input type="radio" /> Yes
        <input type="radio" /> No</div>
              </label>
            </div>
            <div>
              <label>
                If yes: what kind?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Access to guns, a license to carry, or possess a gun?
        <div style={hel}>
                  <input type="radio" /> Yes
        <input type="radio" /> No</div>
              </label>
            </div>
            <div>
              <label>
                If yes, what kind?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Psychiatric/emotional problems?
        <div style={hel}>
                  <input type="radio" /> Yes
        <input type="radio" /> No</div>
              </label>
            </div>
            <div>
              <label>
                If yes, what kind?
        <div style={hel}>
                  <input type="text" /></div>
              </label>
            </div>
            <div>
              <label>
                Any other information helpful in locating this person
        <div style={hel}>
                  <input type="textarea" /></div>
              </label>
            </div>
          </fieldset>
          <Link to="/list">
            <Button> <Span /> Go back to next form</Button>
          </Link>
          <Link to="/list">
            <Button> <Span /> Select a different form</Button>
          </Link>
          <Link to="/">
            <Button> <Span /> Go back to Homepage</Button>
          </Link>
        </div>
      </form>
    );
  }
}

export default FormsPage;




