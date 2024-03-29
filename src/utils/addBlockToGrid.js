import { shapes } from "./blocks";

export const addBlockToGrid = (shape, grid, x, y, rotation) => {
  let gameOver = false
  const block = shapes[shape][rotation]
  const newGrid = [ ...grid ]
  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col]) {
        const yIndex = row + y
        if (yIndex < 0) {
          gameOver = true
        } else {
          newGrid[row + y][col + x] = shape
        }
      }
    }
  }
  return { newGrid, gameOver }
}
