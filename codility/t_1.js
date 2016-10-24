// you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');
//
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function solution(N) {
    console.log(dec2bin(N))
    console.log(dec2bin(N).split('1').sort().reverse())
    console.log(dec2bin(N).split('1').sort().reverse()[0].length)
}

solution(1024)
