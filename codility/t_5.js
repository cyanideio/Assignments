// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
A = [-1000, 1000]

// Sum of an Array
function sum(a) {
	return a.reduce((a, b) => a + b, 0);
}

function solution(A) {
	var num = 1000000000000000
	for (var i = 0 ; i < A.length; i++) {
		var left = sum(A.slice(0, i))
		var right = sum(A.slice(i, A.length))
		console.log(left, right)
		var r = Math.abs(left - right)
		if ( r < num) {
			num = r;
		}
	}
	return num
}

console.log(solution(A))