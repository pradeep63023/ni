import './index.css'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, image} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, image)
  }

  return (
    <li className="con">
      <button
        className="butt"
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <img className="im" src={image} alt={id} />
      </button>
    </li>
  )
}

export default Buttons
