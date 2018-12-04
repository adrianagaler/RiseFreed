import { Flex } from "grid-styled";
import styled from "styled-components";

export const Button = styled.button`
    width: 80%;
    display: inline-block;
    border-radius: 4px;
    background-color: blue;
    border: none;
    color: #FFFFFF;
    text-align: left;
    font-size: 28px;
    padding: 20px;
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
    display: inline-block;
    position: relative;
    transition: 0.5s;
  :after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
`;

export const InputText = styled.input`
  width: 100%;
  padding: 5px 5px;
  margin: 6px 6px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 6px;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  :focus {
    border: 3px solid red;
  }
`;

export const Container = styled(Flex)`
  width: 100%;
  margin: 15px;
`;

export const Div = styled(Flex)`
  margin: 10%;
`;
export const Text = styled(Flex)`
  font: Arial;
  font-size: 18px;
  font-weight: 300;
`;

export const H1 = styled.h1`
  font: Arial;
  font-size: 32px;
  margin-bottom: 0px;
  text-decoration: underline;
`;
