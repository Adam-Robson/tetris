import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'
import { shapes } from '../utils/blocks'

// Draws the "next" block view showing the next block to drop
export default function NextBlock() {
  const nextShape = useSelector(({ nextShape }) => nextShape)
  const block = shapes[nextShape][0]
  const grid = block.map((rowArray, row) => {
  return rowArray.map((square, col) => {
    return <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : nextShape} />
  })
  })

  return (
    <div className="next-block">
      {grid}
    </div>
  )
}
