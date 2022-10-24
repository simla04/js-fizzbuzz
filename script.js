for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        document.write('\n' + 'FizzBuzz');
        console.log("%cFizzBuzz", "color:yellow");
    }   else if (i % 3 == 0){
        document.write('\n' + 'Fizz');
        console.log("%cFizz", "color:red");
    }   else if (i % 5 == 0){
        document.write('\n' + 'Buzz');
        console.log("%cBuzz", "color:blue");
    } else {
        document.write('\n' + i);
        console.log(i);
    }
}