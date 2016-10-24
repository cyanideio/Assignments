var a = [3, 9, 201, 3, 9, 3, 9, 3, 9]

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// remove item from Array
function remove(x, array) {
    var index = array.indexOf(x)
    if (index > -1) {
        array.splice(index, 1);
    }
}

function Solution(A){
    var _set = new Set(A)
    for (value of _set) {	
    	// Deep Copy of Array
	    var n = A.slice()
    	remove(value, n)	
    	if (n.indexOf(value) == -1) {
    		return value
    	}
    }
}

console.log(Solution(a))
