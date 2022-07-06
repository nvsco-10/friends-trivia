import styled from 'styled-components'

export const Wrapper = styled.span`
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: 2.3rem;
  margin: 0 0.65rem;
  
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }

  .yellow {
    color: yellow;
  }

  @media (max-width: 540px) {
    font-size: 1.85rem;
  }
`