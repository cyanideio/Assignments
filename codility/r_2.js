function fizzBuzz(val) {
    var msg = '';
    if (val % 3 == 0 ) msg += 'Fizz'
    if (val % 5 == 0 ) msg += 'Buzz'
    if (val % 7 == 0 ) msg += 'Woff'
    return (msg.length == 0 ? val : msg) ;
}

for (var i = 1; i <= 1000; i++) {
    console.log(fizzBuzz(i));
}