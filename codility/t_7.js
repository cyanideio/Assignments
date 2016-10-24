var A = [2,3,4,5,6]

//def solution(A):
//		return sum(range(1, len(A) + 2)) - sum(A)

function solution(A) {
	var sorted = A.sort()
	var len = A.length
	for (var i = 0; i < sorted.length; i++) {
		if (sorted[i] + 1 != sorted[i+1] && i + 1 != sorted.length) {
			return sorted[i] + 1
		}
		// console.log(sorted[i])
	}

    // write your code in JavaScript (Node.js 6.4.0)
}

console.log(solution(A))