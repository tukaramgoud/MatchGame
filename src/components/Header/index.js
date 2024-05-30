import './index.css'

const Header = props => {
  const {counter, scoreIs} = props

  return (
    <div className="header-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo-sizing"
        />
      </div>
      <div className="score-div">
        <p className="header-text">Score: {scoreIs}</p>
        <div className="timer-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-sizing"
          />
          <p className="header-text"> {counter} Sec</p>
        </div>
      </div>
    </div>
  )
}
export default Header
