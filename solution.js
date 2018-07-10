/// BROKEN

var data = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]

function max(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

function min(arr) {
  return arr.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
}

function subtract(data) {
  return max(data) - min(data);
}

function add(data){
  sums = []

  for(i = 0; i <= data.length; i++) {
    sums.push(subtract(data[i]));
  }
}

// add(data);
