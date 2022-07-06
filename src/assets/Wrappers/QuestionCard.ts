import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin: 1rem;
  /* padding: 0.5em; */

  .question {
    margin: 1rem 0 2rem;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  @media (max-width: 540px) {
    .question {
      font-size: 1.2rem;
    }
  }

`

type ButtonWrapperProps = {
  correct: Boolean;
  userClicked: Boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  .choice {
    background-image: ${({ correct, userClicked }) =>
      correct 
      ? 'linear-gradient(1deg, #56fc03, #52c718 99%)'
      : !correct && userClicked
        ? 'linear-gradient(1deg, #fc3003, #e61931 50%)'
        : 'linear-gradient(1deg, #4F58FD, #149BF3 99%)'
      };
    color: #FFFFFF;
    margin: 0.50rem 0;

  }

  
`