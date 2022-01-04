//write a function that takes all the elements of the array and adds them together

function sum (numbers) {
    let sum = 0 //initlaizes the variable that holds the sums
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]; //runs thru the arrays and adds each number to the sum accumulated thus far
    
    }

    return sum; 
    
}

let num = [8,53, 101]
console.log(sum(num))