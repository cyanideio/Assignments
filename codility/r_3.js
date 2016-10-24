var S = 'from'
var T = 'form'

function difference(a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {a[a1[i]] = true; }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {diff.push(k); }
    return diff;
}

function swap(a, x, y) {
	var t = a.slice()
	var tmp = t[y];
	t[y] = t[x];
	t[x] = tmp;
	return t
}

function swapTest(a1, a2){
	for (var i = 0; i < a1.length-1; i++) {
		if (swap(a1, i, i+1).join("") == a2.join("")) return 'SWAP ' + a1[i+1] + " " + a1[i];
	}	
	return 'IMPOSSIBLE'
}

function solution(S, T) {
	if (S === T) return 'NOTHING'
	var arrS = Array.from(S)	
	var arrT = Array.from(T)	
	var _diff_st = difference(arrS, arrT)
	var _diff_ts = difference(arrT, arrS)
	// INSERT or DELETE
	if (_diff_st.length == 1 && arrS.length < arrT.length) return 'INSERT ' + _diff_st[0]
	if (_diff_ts.length == 1 && arrT.length < arrS.length) return 'DELETE ' + _diff_ts[0]
	// SWAP
	if (_diff_st.length == _diff_ts.length && _diff_ts[0] == _diff_st[0]) {
		return swapTest(arrS,arrT)
	} else {
		return 'IMPOSSIBLE'
	}
}

console.log(solution(S, T))