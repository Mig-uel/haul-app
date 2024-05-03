import styled from 'styled-components'

export const HaulContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  text-align: center;

  display: flex;
  flex-direction: row;
  gap: 10px;
  max-width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
