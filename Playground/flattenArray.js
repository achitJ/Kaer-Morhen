const arr = [[1, 2, 3], [[[5, 6]]], [7, 8, 9]]

arr
  .toString()
  .split(',')
  .map((e) => Number(e))