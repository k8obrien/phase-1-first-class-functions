function receivesAFunction(greeting){
    return greeting();
}
receivesAFunction( function (){ return "Hello!";});

function returnsANamedFunction(){
    return function named(greet = "Hello"){
        return greet
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function (greeting = "Welcome!"){
        return greeting
    }
}