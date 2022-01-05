//8kyu write a function that takes three arguments and have it perform the needed operation
function basicOp(operation, value1, value2)
{
  if(operation == '+'){
     return value1 + value2;
     }
  else if(operation == '-'){
          return value1 - value2;
          }
  else if(operation == '*'){
          return value1 * value2
          }
  else if (operation == '/'){
           return value1 / value2;
           }
  else{
    return "incorrect syntax, try again"
  }
}