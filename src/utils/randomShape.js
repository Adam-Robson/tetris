import { shapes } from './blocks'

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Random Shape
export const randomShape = () => {
  return random(1, shapes.length - 1)
}
