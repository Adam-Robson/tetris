import { shapes } from './blocks'
// Returns the next rotation for a shape
// rotation can't exceed the last index of the rotations for the given shape.
export const nextRotation = (shape, rotation) => {
  return (rotation + 1) % shapes[shape].length
}
