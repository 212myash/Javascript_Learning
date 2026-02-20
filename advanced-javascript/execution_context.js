// Execution Context & Scope Chain

var a = 10;

function test() {
    var b = 20;
    console.log(a); // Can access global variable
    console.log(b);
}

test();