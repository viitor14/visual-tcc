import { styled, createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import { device } from '../config/breakpoints';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  :root{
    --toastify-icon-color-success: white;
    --toastify-icon-color-error: white;
  }

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

  }

  body{
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.colorText};
    font-family: "Inter", sans-serif;

  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px ;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  //Mudar css do Toastify
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: ${colors.succesColor};
    color: #fff;
  }

  .Toastify__progress-bar--success {
  background: white;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: ${colors.errorColor};
  }

  .Toastify__progress-bar--error {
    background: white;
  }
`;

export const Container = styled.section`
  width: 70%;
  //background-color: white;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;

  @media (max-width: ${device.laptop}) {
    width: 85%;
  }
  @media (max-width: ${device.tablet}) {
    width: 100%;
  }
`;
