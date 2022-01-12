//8 kyu problem that asked me to right a function that will multiply even numbers by 8 and odds by nine

function simpleMultiplication(number) {
    if(number % 2 == 0){
      return number * 8;
      }
  else{
    return number * 9;
  }
}
//so first i need a condtional to check for eve nor odd status
//nested inside the conditional return the number times the necessary amount given the number