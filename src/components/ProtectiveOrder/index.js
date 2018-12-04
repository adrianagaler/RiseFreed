import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Span } from "./styles";
import { Formik } from 'formik';


class FormsPage extends React.Component {
    constructor() {
      super();
      this.state = {isChecked: false};
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
    }
    handleChecked () {
      this.setState({isChecked: !this.state.isChecked});
    }
  
    handleChange(event) {
      this.setState({title: event.target.value})
    }
  
    handleSubmit(event) {
      event.preventDefault();  
      var checks = document.getElementsByClassName('checkbox');
      var count = 0;
        for (var i = 0;i<3;i++){
          var link;
          if (checks[i].checked===true){
            count=count+1;
            }
          }
          if (count!==3){
            // link= "http://localhost:3003/";
            alert('Unfortunately, you are not eligible for a plaintiff form.Please click non-eligible to access other resources');
            // return link;
          }
          else{
            // link="http://localhost:3003/list";
            alert('done. Click "Eligible" to acces the next form');
            // return link;
          }
        }

    render() {
    var count = 0;
    if (this.state.isChecked) {
      count=count+1
    } else {
      count=count
    }
      return (
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <th><label for="options">Protective Order Eligibility?</label></th>
              <td>
                <p>Were you and your abuser married, residing together, in a substantive dating or engagement relationship, related by blood or marriage, or have a child in common?</p><input type="checkbox" class="checkbox" name="q1" value="Test1" onChange={ this.handleChecked }></input>
                <p>Are you suffering from abuse because your abuser has harmed or attempted to harm you physically, or put you in fear of imminent serious physical harm, or caused you to engage in sexual relations involuntarily by using force, threat or duress?</p><input type="checkbox" class="checkbox" name="q2" value="Test2"></input>
                <p>Are you currently living within the geographical area of this court, or used to live within the geographical area of this court but you left to avoid abuse? </p><input type="checkbox" class="checkbox" name="q3" value="Test3" onclick={this.handleSubmit}></input>
                </td>
              </tr>
             </table>
            <button className="btn btn-default" type="submit" >Next</button> 
           <div>
           <Link to="/list">
           <Button> <Span/> Eligible</Button>
         </Link>
         </div>
         <div>
            <Link to="/">
            <Button> <Span/> Non-Eligible</Button>
          </Link>
          </div>
          </form>
      );
    }
  }
export default FormsPage;
