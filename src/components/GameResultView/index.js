import {
  ShowResultC,
  ResultImagesC,
  ResultTextImg,
  ResultText,
  ResultImage,
  ResultButtonC,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, apponentChoice, playAgain, resultMessage} = props

  const {id, image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultC>
      <ResultImagesC>
        <ResultTextImg>
          <ResultText>You</ResultText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </ResultTextImg>
        <ResultTextImg>
          <ResultText>OPPONENT</ResultText>
          <ResultImage src={image} alt="opponent choice" />
        </ResultTextImg>
      </ResultImagesC>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonC>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButtonC>
    </ShowResultC>
  )
}

export default GameResultView
