S = 'akdjflaksjdfqqieuoiqwekksdjfkjasdfwekjlzxcvnsmnaasdfla';
_S = 'lkdjflaksjdfqqieuoiqwekksdjfkjasdfwekjlzxcvnsmnaasdfaaa';

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
        for (var n = 0; n < A.length; n++) {
    	    if (n != i){
            	if (swap(A, i, n).join('') == _S) {
    	    	   return 'SWAP ' + A[i] + ' ' +  A[n];
    	        }
    	    }
        }
    }
    return 'IMPOSSIBLE'
}

function diff(arr1, arr2) {
    var arr3= [];
    for (var i = 0; i < arr1.length; i++ ){
	var unique = true;
	for(var j=0; j < arr2.length; j++){
	    if(arr1[i] == arr2[j]){
		unique = false;
                break;
            }
        }
    if (unique){ arr3.push(arr1[i]);} }
    return arr3;
}

function symDiff(arr1, arr2){
    return diff(arr1,arr2).concat(diff(arr2,arr1));
}

function arrayTest(arrA, arrB) {
    //check Length
    if(arrA.length !== arrB.length) return false;
    var cA = arrA.slice().sort().join(","); 
    var cB = arrB.slice().sort().join(","); 
    return cA === cB;
}

function solution(S, _S) {
    // Equal Arrays
    if (S === _S){ return 'NOTHING' }
    // Array with same elements but different sequence
    if (arrayTest(Array.from(S), Array.from(_S))) { 
        return swapTest(S,_S) 
    } else {
        if (symDiff(Array.from(S), Array.from(_S)).length == 1) {
	    return 'INSERT or DELETE';
        } else {
  	    return 'IMPOSSIBLE';
        }
    } 
}

console.log(solution(S, _S))
