
// eslint-disable-next-line react/prop-types
export default function GridSquare({ color }) {
  const classes = `grid-square color-${color}`
  return (
    <div className={ classes } />
  )
}
