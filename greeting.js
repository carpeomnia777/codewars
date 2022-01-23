//write a function that will return a greeting integrating the input into the greeting string
//takes input from the user not exactly what the codewars solution was supposed to be but valuable none the less

function greet(name){
    //your code here
    name = prompt("what's your name?")
    let result = `Hello, ${name} how are you doing today?`
    console.log(result)
    return result;
  }
