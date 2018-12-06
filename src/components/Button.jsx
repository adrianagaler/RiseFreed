import React from 'react';
//Use of these components allow for more dynamic coding of page.
//Button component built from tutorials referenced in README file.
//Builds off the default button from react to include styling and uses props
//console.log begins by allowing script to log data/objects to javascript console
//returns button with different responses/ attributes to clicks, classnames, title, and style
const Button = (props) => {
	console.log(props.style);
	return(
	<button 
		style= {props.style} 
		className = {props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
		onClick= {props.action} > 
		{props.title} 
	</button>)
}


export default Button;