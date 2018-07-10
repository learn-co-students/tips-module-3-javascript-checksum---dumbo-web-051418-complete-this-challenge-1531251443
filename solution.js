function checksum(array){
	let sum = 0;
	array.forEach(function(array){
		sum += ((Math.max(...array)) - (Math.min(...array)));
	})
	return sum;
}
