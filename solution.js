var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

// 470 - 178
// 511 - 103
// 525 - 293
// 6683 - 428
// 6206 - 262
// 13131

// solution 1
function sortData(data) {
  data.forEach((element) => {
    element.sort((a,b) => {
      return a - b
    })
  })
  return data
}
function sumMaxMinDiff(sortedData) {
  let sum = 0
  sortedData.forEach((element) => {
    let min = element.slice(0,1)
    let max = element.slice(-1)
    sum += max-min
  })
  return sum
}


// solution 2
function sortData(data) {
  let sum = 0
  data.forEach((element)=>{
    sum += Math.max(...element) - Math.min(...element)
  })
  return sum
}
