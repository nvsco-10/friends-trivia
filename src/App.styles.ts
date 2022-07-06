import styled, { createGlobalStyle } from 'styled-components';
import bg from './assets/images/mayank-kumar.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Itim', cursive;
  }

  body {
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    width: 100vw;
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    footer {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
      a {
        color: lightgrey;
        font-size: 0.60rem;
      }
    }
  }

  
`

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.4rem;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;

  h2 { 
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  button {
    align-items: center;
    appearance: none;
    width: 100%;
    line-height: 1.5;
    padding: 8px 20px;
    margin: 0.40rem 0;
    border-radius: 100px;
    background-size: calc(100% + 20px) calc(100% + 20px);
    /* border: solid 1px black;  */
    cursor: pointer;
    border-width: 0;
    font-size: 1.1rem;
    color: #fff;
    transition: background-position .2s;
    user-select: none;
    -webkit-user-select: none;
  }

  button:hover {
    background-position: -20px -20px;
  }


  button:active, button:focus {
    outline: none;
  }


  button:focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
  }

  /* .start {
    background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%)
  } */

  .start, .next {
    color: #000;
    background-image: linear-gradient(1deg, #faf200, #e8e107 99%)
  }

  .score-count {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

    .incorrect {
      display: flex;
      align-items: center;
    }

    .heart {
      color: red;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 540px) {
    width: 90vw;
    padding: 1rem;

    button {
      font-size: 0.9rem;
    }
  }
  
`


