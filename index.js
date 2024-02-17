function receivesAFunction(spy) {

    spy();
}

function returnsANamedFunction() {
    return returnsANamedFunction()
}
function returnsANamedFunction() {
    return function named() {
        console.log("It's a returned function")
    };
}
function returnsAnAnonymousFunction() {
    return function () {
        // Function logic here
    };
}

// Usage
returnsAnAnonymousFunction();


