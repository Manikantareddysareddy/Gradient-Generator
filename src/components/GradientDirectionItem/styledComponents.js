import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => (props.Value === true ? '#ffffff' : '#ededed')};
  color: #334155;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  opacity: ${props => (props.Value === true ? '1' : '0.5')};
  padding: 10px;
  font-weight: bold;
  border: 0 none;
  margin-left: 10px;
  @media (max-width: 577px) {
    background-color: ${props =>
      props.Value === true ? '#ffffff' : '#ededed'};
    color: #334155;
    border-radius: 5px;
    font-family: 'Roboto';
    font-size: 15px;
    opacity: ${props => (props.Value === true ? '1' : '0.5')};
    padding: 10px;
    font-weight: bold;
    border: 0 none;
    margin-left: 10px;
    width: 30vw;
    margin-bottom: 10px;
  }
`
export const LI = styled.li`
  list-style-type: none;
`
