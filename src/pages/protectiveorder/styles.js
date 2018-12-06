// this style features are imported into the 'protectiveorder' index.js file 
import styled from "styled-components";

export const Button = styled.button`
    width: 30%;
    border-radius: 4px;
    background-color: blue;
    border: none;
    color: #FFFFFF;
    text-align: left;
    font-size: 20px;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    &:hover ${Span}{
      padding-right: 25px;
      color: red;
    }
    &:hover ${Span}:after{
      opacity: 1;
      right: 0;
    }
`;

export const Span = styled.span`
    cursor: pointer;
    position: relative;
    transition: 0.5s;
  }
`;
