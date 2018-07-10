function checkSum(arrays) {
  let checkSum = 0
  arrays.forEach((array) => {     // O(n)
    let sortedArray = array.sort(function(a, b){return a-b}) // O(a log a)
    let difference = sortedArray[sortedArray.length-1] - sortedArray[0]   // O(1)
    checkSum += difference // O(1) 
  })
  return checkSum;
}


function checkSum2(arrays){
  let checkSum = 0
  arrays.forEach((array) => {         // O(n)
    let maximum = Math.max(...array)  // O(a)
    let minimum = Math.min(...array)  // O(a)
    let difference = maximum - minimum  // O(1)
    checkSum += difference  // O(1)
  })
  return checkSum;
}
