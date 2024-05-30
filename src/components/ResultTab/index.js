import './index.css'

const ResultTab = props => {
  const {scoreIs, changeTitle} = props
  const rePlayClicked = () => {
    changeTitle()
  }
  return (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-size"
      />
      <h1>Your Score</h1>
      <h1>{scoreIs}</h1>
      <button type="button" className="play-button" onClick={rePlayClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        Play again
      </button>
    </div>
  )
}

export default ResultTab
