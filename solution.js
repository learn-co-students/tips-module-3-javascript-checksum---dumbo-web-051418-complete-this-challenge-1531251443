function sortRow(arr){
  let finalArr = [];
  arr.forEach(function(subArray){
       let sortedSub = subArray.sort((a, b) => a > b)
       let smallest = sortedSub[0];
       let largest = sortedSub[sortedSub.length - 1];
       rowSum = largest - smallest;
       finalArr.push(rowSum);
      })
  return finalArr.reduce((a, b) => a + b)
}
