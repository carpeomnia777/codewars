function countBy(x, n){
    let z = []
    let y
    for (let i=1; i<=n; i++){
        
        if(i % x == 0){
            y = i
            console.log(y)
            z.push(y)
        }
        
    }
    
    return z;
    
}
//incorrect solution to a codewars challenge that instead finds all the multiples of x with a loop with a recursive length of n
// i thought it would be worth keeping since i spent so long getting it to work.