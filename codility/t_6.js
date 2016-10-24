// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var X = 10, Y = 85, D = 30

function solution(X, Y, D) {
	var Dist = Y - X;
	var Left = Dist % D
	var T = (Dist - Left) / D
	if (Left > 0) {
		return T + 1
	} else {
		return T
	}
    // write your code in JavaScript (Node.js 6.4.0)
}

console.log(solution(X,Y,D))