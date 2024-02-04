import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  Para,
  Ul,
  Para2,
  Input,
  Label,
  InputsContainer,
  InputEl,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    gradientDirection: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    newColor1: '#8ae323',
    newColor2: '#014f7b',
    newVal: gradientDirectionsList[0].value,
    Val: gradientDirectionsList[0].value,
  }

  GenerateGradient = () => {
    const {newColor1, newColor2, color1, color2, newVal, Val} = this.state
    this.setState({newColor1: color1, newColor2: color2, newVal: Val})
  }

  changeDirection = DirectionItem => {
    const {directionId, value} = DirectionItem
    this.setState({gradientDirection: directionId, Val: value})
  }

  onChangeColor = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor1 = event => {
    this.setState({color2: event.target.value})
  }

  render() {
    const {
      gradientDirection,
      color1,
      color2,
      Val,
      newVal,
      newColor1,
      newColor2,
    } = this.state
    return (
      <MainContainer
        color={newColor1}
        colors={newColor2}
        direction={newVal}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <Ul>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              DirectionItem={eachDirection}
              key={eachDirection.directionId}
              value={gradientDirection}
              changeDirection={this.changeDirection}
            />
          ))}
        </Ul>
        <Para2>Pick the Colors</Para2>
        <InputsContainer>
          <Input>
            <Label htmlFor="Color1">{color1}</Label>

            <InputEl
              type="color"
              value={color1}
              onChange={this.onChangeColor}
              id="Color1"
            />
          </Input>

          <Input>
            <Label htmlFor="Color2">{color2}</Label>

            <InputEl
              type="color"
              value={color2}
              onChange={this.onChangeColor1}
              id="Color2"
            />
          </Input>
        </InputsContainer>
        <Button type="button" onClick={this.GenerateGradient}>
          Generate
        </Button>
      </MainContainer>
    )
  }
}

export default GradientGenerator
