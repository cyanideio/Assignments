var _A = [3, 8, 9, 7, 6]
var A = [3, 8, 9, 7, 6, 0, 1, 2, 4]
var K = 20

function rotate(A, K) {
	front = A.slice(0, A.length - K)
	end = A.slice(A.length - K, A.length)
	return end.concat(front)
}

function solution(A, K) {
	if (A.length < K) {
		return rotate(A, K % A.length)
	} else if (A.length == K) {
		return A;
	} else if (A.length > K) {
		return rotate(A, K)
	}
}

console.log(solution(A, K))