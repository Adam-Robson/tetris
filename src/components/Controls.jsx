import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../utils/gameSlice'

export default function Controls() {
  const { isRunning, speed, gameOver } = useSelector(state => state);
  const dispatch = useDispatch()
  const requestRef = useRef()
  const lastUpdateTimeRef = useRef()
  const progressTimeRef = useRef(0)


    useEffect(() => {
      const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRunning) return;

        if (!lastUpdateTimeRef.current) {
          lastUpdateTimeRef.current = time
        }

        const deltaTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += deltaTime
        if (progressTimeRef.current > speed) {
          dispatch(moveDown())
          progressTimeRef.current = 0
        }
        lastUpdateTimeRef.current = time
      };

      requestRef.current = requestAnimationFrame(update)
      return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning, speed, dispatch])

  return (
    <div className='controls-container'>
       <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          e.preventDefault()
          dispatch(moveLeft())
        }}>Left</button>

       <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          e.preventDefault()
          dispatch(moveRight())
        }
      }>Right</button>

     <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          e.preventDefault()
          dispatch(rotate())
        }
      }>Rotate</button>

     <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          e.preventDefault()
          dispatch(moveDown())
        }
      }>Down</button>
    </div>
  );
}
