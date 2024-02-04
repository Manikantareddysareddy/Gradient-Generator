import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color},
    ${props => props.colors}
  );
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #ffffff79;
  font-size: 16px;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 577px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90vw;
  }
`
export const Para2 = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 19px;
`
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
`
export const InputsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
`
export const Label = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  padding-bottom: 20px;
  color: #ffffff;
  padding-left: 20px;
`
export const InputEl = styled.input`
  outline: none;
  height: 6vh;
  width: 15vw;
  cursor: pointer;
`
export const Button = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 13px;
  border-radius: 5px;
  width: 15vw;
  background-color: #00c9b7;
  margin-top: 50px;
  border: 0 none;
  @media (max-width: 577px) {
    color: #1e293b;
    font-family: 'Roboto';
    font-weight: bold;
    padding: 13px;
    border-radius: 5px;
    width: 25vw;
    background-color: #00c9b7;
    margin-top: 50px;
    border: 0 none;
  }
`
