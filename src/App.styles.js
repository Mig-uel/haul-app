import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  // outline: 2px solid red;
`

export const HeaderContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 100%;
  h1 {
    font-size: 3.2em;
  }
  p {
    font-size: 1em;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;

  button {
    border-radius: 8px;
    border: 1px solid black;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    color: #fff;
    background-color: black;
    border-color: #213547;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
