// create a function with two arguments that will return an array of the first (n) multiples of (x)
// so the first number will be the multiple and the second is for how many times it multiplies
function countBy(x, n){
    let z = []
   for(let i = 1; i<=n; i++){
      let y = i * x
      z.push(y)
   }
   return z;
   console.log(z)
}


//countBy(1,10) = [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) = [2,4,6,8,10]
//countBy(3,4) = [3,6,9,12]
//conditional that checks if number is multiple of x, if so output to array if not dont.
//for loop that multiples and outputs into an array each step