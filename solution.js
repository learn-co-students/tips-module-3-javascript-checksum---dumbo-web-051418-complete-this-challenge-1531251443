let data = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]
let checksum = (arr) => {
  let sum = 0
  if ( typeof(arr) == "object") {
        for (var i = 0; i < arr.length; i++) {
          const max = arr[i].reduce(function(a, b) {
                return Math.max(a, b);
            });
          const min = arr[i].reduce(function(a, b) {
                return Math.min(a, b);
            });
          sum += (max - min)
        }
    }
  else console.log(`Your input is not an array: ${arr}`);
  return sum
}
//16
checksum(data)
