//write a conditional that returns a greeting based on who is entered in.

function greet (name, owner) {
  if(name == owner){
      return "Hello boss";
  }
  else{
      return 'Hello guest';
  }
}