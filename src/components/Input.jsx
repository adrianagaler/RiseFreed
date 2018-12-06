import React from 'react';
//Use of these components allow for more dynamic coding of page.
//Input built off tutorials referenced in README file. 
//specifies the components of this input constant which
//uses react props as base for the code. It includes labels, 
//attributes of classname, id, name, type, value, onChange, and placeholder
const Input = (props) => {
	//console.log(props.value);
	return (  
  <div className="form-group">
    <label for={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)
}

export default Input;