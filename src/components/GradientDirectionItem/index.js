import {Button, LI} from './styledComponents'

const GradientDirectionItem = props => {
  const {DirectionItem, value, changeDirection} = props
  const {directionId, displayText} = DirectionItem
  let StyleValue
  if (directionId === value) {
    StyleValue = true
  } else {
    StyleValue = false
  }

  const ChangeId = () => {
    changeDirection(DirectionItem)
  }

  return (
    <LI>
      <Button type="button" Value={StyleValue} onClick={ChangeId}>
        {displayText}
      </Button>
    </LI>
  )
}

export default GradientDirectionItem
