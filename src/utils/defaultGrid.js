
export const gridDefault = () => {
  const rows = 18
  const cols = 10
  const array = []
  for (let row = 0; row < rows; row++) {
  array.push([])
  for (let col = 0; col < cols; col++) {
    array[row].push(0)
  }
}
  // Fill the array with 18 arrays each containing
  // 10 zeros (0)

  return array
}
