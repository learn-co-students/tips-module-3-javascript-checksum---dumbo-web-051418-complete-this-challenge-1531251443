var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function checksup(nestedArr) {
  const results = []
  for (const arr of nestedArr) {
    let leastValue, greatestValue;
    for (const elem of arr) {
      leastValue === undefined ? leastValue = elem : null
      greatestValue === undefined ? greatestValue = elem : null

      leastValue > elem ? leastValue = elem : null
      greatestValue < elem ? greatestValue = elem : null
    }
    results.push(greatestValue-leastValue)
  }
  return results.reduce((x,y) => (x+y))
}

console.log(checksup(data))
