import React from 'react';

//TextArea component builds off react's props as base code
//includes labels, and text area with attributes of className,
//name, rows, cols, value, onChange, placeholder.
//Use of these components allow for more dynamic coding of page.
const TextArea = (props) => (  
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} />
  </div>
);

export default TextArea;