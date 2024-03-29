import { useSelector, useDispatch } from 'react-redux'
import { pause, resume, restart } from '../utils/gameSlice'

export default function ScoreBoard() {
  const { isRunning, gameOver, score } = useSelector(state => ({
    isRunning: state.isRunning,
    gameOver: state.gameOver,
    score: state.score
  }))

  const dispatch = useDispatch()

  return (
    <div className="score-board">
      <div>Score: { score }</div>
      <div>Level: 1</div>
    <button
  className="score-board-button"
        onClick={(e) => {
          e.preventDefault()
          if (gameOver) { return }

          if (isRunning) {
            dispatch(pause())
          } else {
            dispatch(resume())
          }}}>{isRunning ? 'Pause' : 'Play'}</button>

     <button
  className="score-board-button"
      onClick={(e) => {
        e.preventDefault()
        dispatch(restart())
      }
  }>Restart</button>

    </div>
  )
}
