import styled from "styled-components";

// style for Defendant For react
//styles buttons, includes in it the capacity
//for the button designs to react dynamically to changes like being clicked
export const Button = styled.button`
  width: 30%;
  border-radius: 4px;
  background-color: white;
  border: none;
  color: #000000;
  text-align: left;
  font-size: 20px;
  padding: 10px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
`;
//span helps makes the button responsive to pointer changes
// export const Span = styled.span`
//   cursor: pointer;
//   position: relative;
//   transition: 0.5s;
// `;
