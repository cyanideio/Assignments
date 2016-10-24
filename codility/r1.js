S = 'akdjflaksjdfqqieuoiqwekksdjfkjasdfwekjlzxcvnsmnaasdfla';
_S = 'lkdjflaksjdfqqieuoiqwekksdjfkjasdfwekjlzxcvnsmnaasdfaa';

A = Array.from(S)

// Swap Function
function swap(a, x, y) {
    var temp = a.slice();
    var t = temp[y];
    temp[y] = temp[x];
    temp[x] = t;
    return temp;
}

// Possibility Check
function swapTest(S, _S) {
    for (var i = 0; i < A.length; i++) {
        for ( var n = 0; n < A.length; n++) {
    	    if (n != i){
            	if (swap(A, i, n).join('') == _S) {
    	    	   return 'SWAP ' + A[i] + ' ' +  A[n];
    	        }
    	    }
        }
    }
    return 'IMPOSSIBLE'
}

console.log(swapTest(S, _S))
